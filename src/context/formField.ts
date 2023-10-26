import { createContext } from 'react'
import { type FieldPath, type FieldValues } from 'react-hook-form'

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

interface FormRadioFieldContextValue {
  name: string
}

const FormRadioFieldContext = createContext<FormRadioFieldContextValue>(
  {} as FormRadioFieldContextValue
)

export { FormFieldContext, FormRadioFieldContext }
export type { FormFieldContextValue, FormRadioFieldContextValue }
