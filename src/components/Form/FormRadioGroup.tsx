import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import React from 'react'
import { FormRadioFieldContext } from 'src/context/formField'
import { useFormItem, useFormRadioItem } from 'src/hooks/useFormItem'
import { cn } from 'src/lib/utils'
import { Icon } from '../Icon/Icon'

export const FormRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    horizontal?: boolean
  }
>(({ horizontal = false, className, ...props }, ref): JSX.Element => {
  const {
    controller: { field },
  } = useFormItem()

  return (
    <RadioGroupPrimitive.Root
      className={cn(
        'flex gap-2',
        {
          'flex-col items-stretch': !horizontal,
          'flex-row items-center': horizontal,
        },
        className
      )}
      ref={ref}
      value={field.value as string}
      onValueChange={field.onChange}
      {...props}
    />
  )
})
FormRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface FormRadioItem extends StylingProps {
  name: string
  children: React.ReactNode
}

export const FormRadioItem = ({
  name,
  children,
  className,
}: FormRadioItem): JSX.Element => {
  return (
    <FormRadioFieldContext.Provider value={{ name }}>
      <div className={cn('flex items-center gap-2', className)}>{children}</div>
    </FormRadioFieldContext.Provider>
  )
}

export const FormRadio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref): JSX.Element => {
  const { name } = useFormRadioItem()

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-grey-50 text-dim focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      id={name}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Icon name="Circle" className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
FormRadio.displayName = RadioGroupPrimitive.Item.displayName
