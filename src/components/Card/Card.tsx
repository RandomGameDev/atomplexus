import clsx from 'clsx'
export interface CardProps extends StylingProps {
  disabled?: boolean
}

export const Card = ({
  children,
  disabled = false,
  className,
}: React.PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <div
      className={clsx(
        'rounded-sm border border-grey-50/40 px-6 py-2',
        {
          'bg-clear': !disabled,
          'bg-grey-30': disabled,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
