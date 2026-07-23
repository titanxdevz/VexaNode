import { useQuery } from "@tanstack/react-query"

export function useAdminData() {
  return useQuery({
    queryKey: ["admin-data"],
    queryFn: async () => {
      const res = await fetch("/api/admin/data")
      if (!res.ok) throw new Error("Failed to fetch admin data")
      return res.json()
    },
  })
}

export function useAdminSettings() {
  return useQuery({
    queryKey: ["admin-settings"],
    queryFn: async () => {
      const res = await fetch("/api/admin/settings")
      if (!res.ok) throw new Error("Failed to fetch admin settings")
      return res.json()
    },
  })
}
