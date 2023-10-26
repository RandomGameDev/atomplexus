import { useFormItem } from 'src/hooks/useFormItem'
import { cn } from 'src/lib/utils'

export type InputSize = 'default' | 'sm'

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  inputStyle?: string
  inputSize?: InputSize
}

export const FormInput = ({
  leftIcon,
  rightIcon,
  type = 'text',
  inputSize = 'default',
  inputStyle,
  className,
  ...props
}: FormInputProps): JSX.Element => {
  const { register, name } = useFormItem()

  return (
    <div
      className={cn('relative flex max-h-11 w-full items-center', className)}
    >
      <div className="absolute left-3 text-20 text-grey-50">{leftIcon}</div>
      <input
        type={type}
        className={cn(
          'w-full rounded-md border border-grey-50 px-3 py-2 file:border-0 file:bg-transparent file:font-medium placeholder:text-grey-50 focus:outline-none focus:ring-2 focus:ring-info-30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-grey-10 disabled:opacity-50',
          {
            '!pl-10': !!leftIcon,
            '!pr-10': !!rightIcon,
            'prose-md h-10 px-4 py-2 file:prose-md': inputSize === 'default',
            'prose-sm h-8 px-2 py-1 file:prose-sm': inputSize === 'sm',
          },
          inputStyle
        )}
        id={name}
        {...props}
        {...register(name)}
      />
      <div className="absolute right-3 text-20 text-grey-50">{rightIcon}</div>
    </div>
  )
}
