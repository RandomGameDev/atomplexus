import type * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'
import { useFormItem, useFormRadioItem } from 'src/hooks/useFormItem'
import { cn } from 'src/lib/utils'
import { Label } from './Label'

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    item?: boolean
  }
>(({ item = false, className, ...props }, ref): JSX.Element => {
  const { error, name } = useFormItem()

  return (
    <Label
      ref={ref}
      className={cn(
        {
          'text-danger-50': error,
          'font-normal': item,
        },
        className
      )}
      htmlFor={name}
      {...props}
    />
  )
})

FormLabel.displayName = 'FormLabel'

export const FormRadioLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref): JSX.Element => {
  const { name } = useFormRadioItem()

  return (
    <Label
      ref={ref}
      className={cn('font-normal', className)}
      htmlFor={name}
      {...props}
    />
  )
})

FormRadioLabel.displayName = 'FormRadioLabel'
