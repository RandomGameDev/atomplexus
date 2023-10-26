import React from 'react'
import { useController } from 'react-hook-form'
import { useFormItem } from 'src/hooks/useFormItem'
import { cn } from 'src/lib/utils'

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref): JSX.Element | null => {
  const { error } = useFormItem()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      className={cn('prose-sm font-medium text-danger-50', className)}
      {...props}
    >
      {body}
    </p>
  )
})

FormMessage.displayName = 'FormMessage'

export const FormCheckboxMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    name: string
  }
>(({ name, className, children, ...props }, ref): JSX.Element | null => {
  const {
    fieldState: { error },
  } = useController({ name })
  const body = error?.root ? String(error.root.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      className={cn('prose-sm font-medium text-danger-50', className)}
      {...props}
    >
      {body}
    </p>
  )
})

FormCheckboxMessage.displayName = 'FormCheckboxMessage'
