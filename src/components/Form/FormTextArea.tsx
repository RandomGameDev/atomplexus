import React from 'react'
import { useFormItem } from 'src/hooks/useFormItem'
import { cn } from 'src/lib/utils'

export type FormTextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const FormTextArea = ({
  className,
  ...props
}: FormTextAreaProps): JSX.Element => {
  const { register, name } = useFormItem()

  return (
    <textarea
      className={cn(
        'sbar prose-md flex min-h-[80px] w-full resize-none rounded-md border border-grey-50 px-3 py-2 placeholder:text-grey-50 focus:outline-none focus:ring-2 focus:ring-info-30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-grey-10 disabled:opacity-50',
        className
      )}
      id={name}
      {...props}
      {...register(name)}
    />
  )
}
