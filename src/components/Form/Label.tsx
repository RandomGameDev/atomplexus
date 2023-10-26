import * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'
import { cn } from 'src/lib/utils'

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(
  ({ className, ...props }, ref): JSX.Element => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        'prose-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  )
)

Label.displayName = LabelPrimitive.Root.displayName
