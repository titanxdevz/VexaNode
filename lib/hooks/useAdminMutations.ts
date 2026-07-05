import { useMutation, useQueryClient } from "@tanstack/react-query"

type AdminAction =
  | { type: "BAN_USER"; id: string }
  | { type: "UNBAN_USER"; id: string }
  | { type: "DELETE_ORDER"; id: string }
  | { type: "UPDATE_ORDER_STATUS"; id: string; status: string }
  | { type: "UPDATE_TICKET_STATUS"; id: string; status: string }

export function useAdminAction() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (action: AdminAction) => {
      const res = await fetch("/api/admin/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Admin action failed")
      }
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-data"] })
      queryClient.invalidateQueries({ queryKey: ["user-data"] })
    },
  })
}

export function useSaveAdminSettings() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (settings: {
      enabled: boolean
      appId: string
      secretKey: string
      sandbox: boolean
    }) => {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to save settings")
      }
      return res.json()
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-settings"] }),
  })
}
