import type * as SelectPrimitive from '@radix-ui/react-select'
import { useFormItem } from 'src/hooks/useFormItem'
import { Select } from './Select'

interface FormSelectProps extends SelectPrimitive.SelectProps {
  placeholder?: React.ReactNode
}

export const FormSelect = ({ ...props }: FormSelectProps): JSX.Element => {
  const {
    name,
    controller: { field },
  } = useFormItem()

  return (
    <Select
      onValueChange={field.onChange}
      value={field.value as string}
      name={name}
      {...props}
    />
  )
}
