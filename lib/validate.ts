import { z } from "zod"

export const ticketSchema = z.object({
  subject: z.string().min(2, "Subject must be at least 2 characters").max(100).trim(),
  message: z.string().min(5, "Message must be at least 5 characters").max(2000).trim(),
  type: z.enum(["Support", "Billing", "Technical"]),
  priority: z.enum(["Low", "Normal", "High", "Urgent"]).optional(),
})

export const replySchema = z.object({
  message: z.string().min(1).max(2000).trim(),
})

export const orderSchema = z.object({
  orderId: z.string().uuid().optional(),
  planName: z.string().min(2).max(100).trim().optional(),
  amount: z.string().min(1).max(20).trim(),
  proofUrl: z.string().url().optional(),
  items: z.array(z.any()).optional(),
})

export const adminActionSchema = z.object({
  type: z.enum(["BAN_USER", "UNBAN_USER", "DELETE_ORDER", "UPDATE_ORDER_STATUS", "UPDATE_TICKET_STATUS"]),
  id: z.string().uuid(),
  status: z.string().optional()
})

export const adminCreateServerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(50).trim(),
  planName: z.string().min(2).max(50).trim(),
  memory: z.number().positive(),
  disk: z.number().positive(),
  cpu: z.number().positive()
})
