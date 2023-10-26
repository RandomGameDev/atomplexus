import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { cn } from 'src/lib/utils'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'

interface DropdownMenuProps {
  label: React.ReactNode
  variant?: 'ghost' | 'outline'
  children: React.ReactNode
  align?: 'start' | 'center' | 'end'
}

const DropdownMenu = ({
  label,
  variant = 'ghost',
  children,
  align,
}: DropdownMenuProps): JSX.Element => {
  return (
    <DropdownMenuPrimitive.Root modal={true}>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button
          variant={variant}
          size="sm"
          className="data-[state=open]:bg-grey-30"
          propagate={false}
        >
          {label}
        </Button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={4}
          align={align}
          className={cn(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border border-grey-10 bg-clear p-1 text-dim shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
          )}
        >
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(
  ({ className, ...props }, ref): JSX.Element => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn('prose-sm px-2 py-1.5 font-semibold', className)}
      {...props}
    />
  )
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(
  ({ className, ...props }, ref): JSX.Element => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-grey-30', className)}
      {...props}
    />
  )
)
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(
  ({ className, children, checked, ...props }, ref): JSX.Element => (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'focus:text-accent-foreground prose-sm relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none transition-colors focus:bg-grey-30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icon name="Check" size="xs" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
)
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(
  ({ className, inset, ...props }, ref): JSX.Element => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        'focus:text-accent-foreground prose-sm relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none transition-colors focus:bg-grey-30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
}
export type { DropdownMenuProps }
