import type { StylingProps } from '@customTypes/props'
import clsx from 'clsx'
import '../../index.css'

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
        'ap-rounded-sm ap-border ap-border-grey-50/40 ap-px-6 ap-py-2',
        {
          'ap-bg-clear': !disabled,
          'ap-bg-grey-30': disabled,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
