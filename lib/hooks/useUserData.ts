import { useQuery } from "@tanstack/react-query"

export function useUserData() {
  return useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const res = await fetch("/api/user/data")
      if (!res.ok) throw new Error("Failed to fetch user data")
      return res.json()
    },
  })
}
