import { z } from "zod"

export const profileNameSchema = z.object({
  displayName: z.string().min(1, "Display name is required").max(50, "Display name must be under 50 characters"),
})

export const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string().min(1, "Please confirm your new password"),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export const deleteConfirmationSchema = z.object({
  confirmation: z.literal("DELETE"),
})

export const ticketSchema = z.object({
  subject: z.string().min(3, "Subject must be at least 3 characters").max(100, "Subject must be under 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message must be under 2000 characters"),
})

export const replySchema = z.object({
  message: z.string().min(1, "Reply cannot be empty").max(2000, "Reply must be under 2000 characters"),
})

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
})

export const cashfreeSettingsSchema = z.object({
  enabled: z.boolean(),
  appId: z.string().min(1, "App ID is required"),
  secretKey: z.string().min(1, "Secret Key is required"),
  sandbox: z.boolean(),
})
