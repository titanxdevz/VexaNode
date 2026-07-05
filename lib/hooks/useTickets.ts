import { useQuery } from "@tanstack/react-query"

export function useTickets() {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await fetch("/api/tickets")
      if (!res.ok) throw new Error("Failed to fetch tickets")
      return res.json()
    },
  })
}

export function useTicket(id: string) {
  return useQuery({
    queryKey: ["ticket", id],
    queryFn: async () => {
      const res = await fetch(`/api/tickets/${id}`)
      if (!res.ok) throw new Error("Failed to fetch ticket")
      return res.json()
    },
    enabled: !!id,
  })
}
