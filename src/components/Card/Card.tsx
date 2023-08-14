import { cn } from 'src/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
}

const Card = ({
  children,
  disabled = false,
  className,
  ...props
}: React.PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <div
      className={cn(
        'rounded-sm border border-grey-50/40 bg-clear px-6 py-2 disabled:bg-grey-30',
        {
          'bg-clear': !disabled,
          'bg-grey-30': disabled,
        },
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card, type CardProps }
