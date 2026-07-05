export interface ApiError {
  message: string
  code?: string
  status?: number
}

export function formatApiError(err: unknown): ApiError {
  if (err instanceof Error) {
    // Try to parse JSON error bodies from fetch responses
    const match = err.message.match(/^(\d{3}): (.+)$/)
    if (match) {
      return { message: match[2], status: parseInt(match[1]) }
    }
    return { message: err.message }
  }

  if (typeof err === "object" && err !== null) {
    const obj = err as Record<string, unknown>
    if (typeof obj.error === "string") return { message: obj.error, code: obj.code as string }
    if (typeof obj.message === "string") return { message: obj.message, code: obj.code as string }
  }

  if (typeof err === "string") return { message: err }

  return { message: "An unexpected error occurred. Please try again." }
}

export function isNetworkError(err: unknown): boolean {
  return err instanceof TypeError && err.message === "Failed to fetch"
}
