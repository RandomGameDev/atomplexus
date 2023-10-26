import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import React from 'react'
import { useFormItem } from 'src/hooks/useFormItem'
import { cn } from 'src/lib/utils'
import { Icon } from '../Icon/Icon'

export const FormCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref): JSX.Element => {
  const {
    name,
    controller: { field },
  } = useFormItem()

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded border border-grey-50 focus:outline-none focus:ring-2 focus:ring-info-30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-info-50 data-[state=checked]:text-clear',
        className
      )}
      checked={field.value as boolean}
      onCheckedChange={field.onChange}
      id={name}
      {...props}
    >
      <CheckboxPrimitive.CheckboxIndicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Icon name="Check" className="h-4 w-4" strokeWidth={3} />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  )
})

FormCheckbox.displayName = 'FormCheckbox'
