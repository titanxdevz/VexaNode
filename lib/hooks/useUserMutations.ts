import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (name: string) => {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to update profile")
      }
      return res.json()
    },
    onMutate: async (name) => {
      await queryClient.cancelQueries({ queryKey: ["user-data"] })
      const previous = queryClient.getQueryData(["user-data"])
      if (previous) {
        queryClient.setQueryData(["user-data"], (old: any) => {
          if (!old) return old
          return { ...old, user: { ...old.user, name } }
        })
      }
      return { previous }
    },
    onError: (_err, _name, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["user-data"], context.previous)
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
  })
}

export function useChangePassword() {
  return useMutation({
    mutationFn: async ({
      currentPassword,
      newPassword,
    }: {
      currentPassword: string
      newPassword: string
    }) => {
      const res = await fetch("/api/user/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to change password")
      }
      return res.json()
    },
  })
}

export function useUnlinkProvider() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (provider: string) => {
      const res = await fetch(`/api/user/unlink?provider=${provider}`, {
        method: "DELETE",
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to unlink account")
      }
      return res.json()
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
  })
}

export function useDeleteAccount() {
  return useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/user/delete-account", { method: "DELETE" })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to delete account")
      }
      return res.json()
    },
  })
}

export function useUploadAvatar() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (image: string) => {
      const res = await fetch("/api/user/avatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to upload avatar")
      }
      return res.json()
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
  })
}
