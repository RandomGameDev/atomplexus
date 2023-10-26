import { useContext } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { FormFieldContext, FormRadioFieldContext } from 'src/context/formField'

const useFormItem = () => {
  const fieldContext = useContext(FormFieldContext)
  const formContext = useFormContext()
  const controller = useController({ name: fieldContext.name })

  if (!formContext) {
    throw new Error('useFormItem should be used within <Form>')
  }

  const { getFieldState, formState, register } = formContext

  const fieldState = getFieldState(fieldContext.name, formState)

  return {
    name: fieldContext.name,
    register,
    controller,
    ...fieldState,
  }
}

const useFormRadioItem = () => {
  const radioContext = useContext(FormRadioFieldContext)

  if (!radioContext) {
    throw new Error('useFormRadioItem should be used within <FormRadioItem>')
  }

  return {
    name: radioContext.name,
  }
}

export { useFormItem, useFormRadioItem }
