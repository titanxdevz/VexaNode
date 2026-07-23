import { useState, useCallback } from "react"
import type { ZodSchema, ZodError } from "zod"

export function useFormValidation<T>(schema: ZodSchema<T>) {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  const validate = useCallback((data: T): boolean => {
    const result = schema.safeParse(data)
    if (result.success) {
      setErrors({})
      return true
    }
    const fieldErrors: Partial<Record<keyof T, string>> = {}
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof T
      if (!fieldErrors[key]) {
        fieldErrors[key] = issue.message
      }
    }
    setErrors(fieldErrors)
    return false
  }, [schema])

  const clearErrors = useCallback(() => setErrors({}), [])

  const getError = useCallback((field: keyof T) => errors[field] ?? null, [errors])

  return { errors, validate, clearErrors, getError, setErrors }
}
