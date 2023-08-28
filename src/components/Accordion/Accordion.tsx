'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { forwardRef } from 'react'
import { cn } from 'src/lib/utils'
import { Icon } from '../Icon/Icon'

export interface AccordionItemProps {
  header: React.ReactNode
  iconPosition?: 'start' | 'end' | 'none'
}

const Accordion = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(
  ({ className, ...props }, ref): JSX.Element => (
    <AccordionPrimitive.Root
      className={cn('space-y-2', className)}
      ref={ref}
      {...props}
    />
  )
)

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> &
    AccordionItemProps
>(
  (
    { header, iconPosition = 'end', children, className, ...props },
    ref
  ): JSX.Element => {
    return (
      <AccordionPrimitive.Item
        className={cn(
          'prose-md rounded-sm border border-grey-50/40 bg-clear data-[disabled]:bg-grey-30',
          className
        )}
        ref={ref}
        {...props}
      >
        <AccordionPrimitive.Header className="flex px-4">
          <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 font-medium transition-all [&[data-state=open]>svg]:-rotate-180">
            {iconPosition === 'start' && (
              <Icon
                name="ChevronDown"
                className="mr-3 h-4 w-4 shrink-0 transition-transform duration-200"
              />
            )}
            {header}
            {iconPosition === 'end' && (
              <Icon
                name="ChevronDown"
                className="ml-3 h-4 w-4 shrink-0 transition-transform duration-200"
              />
            )}
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden shadow-inner transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="px-4 py-3">{children}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    )
  }
)

export { Accordion, AccordionItem }
