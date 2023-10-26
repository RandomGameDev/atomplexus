import { FormFieldContext } from 'src/context/formField'
import { cn } from 'src/lib/utils'

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  horizontal?: boolean
}

export const FormItem = ({
  className,
  horizontal = false,
  name,
  ...props
}: FormItemProps): JSX.Element => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <div
        className={cn(
          {
            'flex flex-col items-stretch space-y-2': !horizontal,
            'flex flex-row items-center space-x-2': horizontal,
          },
          className
        )}
        {...props}
      />
    </FormFieldContext.Provider>
  )
}
