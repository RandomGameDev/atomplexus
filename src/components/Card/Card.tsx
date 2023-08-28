import { cn } from 'src/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  noPad?: boolean
}

const Card = ({
  children,
  disabled = false,
  noPad = false,
  className,
  ...props
}: React.PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <div
      className={cn(
        'rounded-sm border border-grey-50/40 bg-clear disabled:bg-grey-30',
        {
          'bg-clear': !disabled,
          'bg-grey-30': disabled,
          'px-6 py-4': !noPad,
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
