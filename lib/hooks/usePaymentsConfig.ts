import { useQuery } from "@tanstack/react-query"

export function usePaymentsConfig() {
  return useQuery({
    queryKey: ["payments-config"],
    queryFn: async () => {
      const res = await fetch("/api/payments/config")
      if (!res.ok) throw new Error("Failed to fetch payment config")
      return res.json()
    },
  })
}
