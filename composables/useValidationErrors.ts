import type { ValidationError } from "yup"

export const useExtractYupValidationErrors = (error: ValidationError) => {
    const errors: Record<string, string> = {}
  
    error.inner.forEach(e => {
      const name = e.path ?? ''
      errors[name] = e.message
    })
  
    return errors
  }