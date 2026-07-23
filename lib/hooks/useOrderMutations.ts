import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreateOrder() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: {
      planName?: string
      amount: string
      proofUrl?: string
      items?: any[]
      orderId?: string
    }) => {
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to create order")
      }
      return res.json()
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user-data"] }),
  })
}

export function useCreateCashfreeSession() {
  return useMutation({
    mutationFn: async (data: {
      amount: string
      orderId?: string
      phone?: string
      items?: any[]
    }) => {
      const res = await fetch("/api/payments/cashfree/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to create payment session")
      }
      return res.json()
    },
  })
}

export function useVerifyPayment() {
  return useMutation({
    mutationFn: async (data: {
      image: string
      amount: string
      ocrText?: string
    }) => {
      const res = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Payment verification failed")
      }
      return res.json()
    },
  })
}
