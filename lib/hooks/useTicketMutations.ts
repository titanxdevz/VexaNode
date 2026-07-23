import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreateTicket() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: {
      subject: string
      message: string
      type: string
      priority?: string
    }) => {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to create ticket")
      }
      return res.json()
    },
    onMutate: async (newTicket) => {
      await queryClient.cancelQueries({ queryKey: ["tickets"] })
      const previous = queryClient.getQueryData(["tickets"])
      if (previous) {
        queryClient.setQueryData(["tickets"], (old: any) => {
          if (!old) return old
          const optimistic = {
            id: `temp-${Date.now()}`,
            subject: newTicket.subject,
            message: newTicket.message,
            type: newTicket.type,
            priority: newTicket.priority || "Normal",
            status: "Open",
            created_at: new Date().toISOString(),
            users: { name: "You" },
          }
          return { ...old, tickets: [optimistic, ...(old.tickets || [])] }
        })
      }
      return { previous }
    },
    onError: (_err, _data, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["tickets"], context.previous)
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["tickets"] }),
  })
}

export function useReplyToTicket(ticketId: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (message: string) => {
      const res = await fetch(`/api/tickets/${ticketId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to add reply")
      }
      return res.json()
    },
    onMutate: async (message) => {
      await queryClient.cancelQueries({ queryKey: ["ticket", ticketId] })
      const previous = queryClient.getQueryData(["ticket", ticketId])
      if (previous) {
        queryClient.setQueryData(["ticket", ticketId], (old: any) => {
          if (!old) return old
          const optimisticReply = {
            id: `temp-${Date.now()}`,
            message,
            is_admin: false,
            created_at: new Date().toISOString(),
            users: { name: "You", image: null },
          }
          return { ...old, replies: [...(old.replies || []), optimisticReply] }
        })
      }
      return { previous }
    },
    onError: (_err, _data, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["ticket", ticketId], context.previous)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["ticket", ticketId] })
      queryClient.invalidateQueries({ queryKey: ["tickets"] })
    },
  })
}
