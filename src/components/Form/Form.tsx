import type { FieldValues, UseFormReturn } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'
import { cn } from 'src/lib/utils'

export interface FormProps<TFormValues extends FieldValues> {
  methods: UseFormReturn<TFormValues>
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  children: React.ReactNode
  className?: string
}

export const Form = <TFormValues extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
}: FormProps<TFormValues>): JSX.Element => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className={cn(className)}>
        {children}
      </form>
    </FormProvider>
  )
}
