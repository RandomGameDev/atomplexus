import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'
import { cn } from 'src/lib/utils'
import { Icon } from '../Icon/Icon'

interface SelectProps extends SelectPrimitive.SelectProps {
  placeholder?: React.ReactNode
}

export const Select = ({
  placeholder,
  children,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        id={props.name}
        className={cn(
          'prose-sm flex h-10 w-full min-w-[6rem] items-center justify-between rounded-md border border-grey-50 px-3 py-2 placeholder:text-grey-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <Icon name="ChevronDown" className="h-4 w-4" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(
            'relative z-50 min-w-[6rem] overflow-hidden rounded-md border border-grey-30 bg-clear shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
          )}
          position="popper"
        >
          <SelectPrimitive.Viewport
            className={cn(
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] p-1'
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(
  ({ className, children, ...props }, ref): JSX.Element => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'prose-sm relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none focus:bg-grey-10 focus:text-info-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Icon name="Check" className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
)
SelectItem.displayName = 'SelectItem'

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(
  ({ className, ...props }, ref): JSX.Element => (
    <SelectPrimitive.Label
      ref={ref}
      className={cn('text-sm py-1.5 pl-8 pr-2 font-semibold', className)}
      {...props}
    />
  )
)
SelectLabel.displayName = 'SelectLabel'

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(
  ({ className, ...props }, ref): JSX.Element => (
    <SelectPrimitive.Separator
      ref={ref}
      className={cn('bg-muted -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
)
SelectSeparator.displayName = 'SelectSeparator'

export const SelectGroup = SelectPrimitive.Group
SelectGroup.displayName = 'SelectGroup'
