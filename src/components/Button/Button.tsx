import type { StylingProps } from '@customTypes/props'
import clsx from 'clsx'
import React from 'react'

export type ButtonTypes = 'button' | 'reset' | 'submit'
export type ButtonThemes = 'primary' | 'warning' | 'danger' | 'clear'
export type ButtonSize = 'normal' | 'small' | 'extrasmall'

export interface ButtonProps extends StylingProps {
  type?: ButtonTypes
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
  disabled?: boolean
  theme?: ButtonThemes
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  size?: ButtonSize
  id?: string
  square?: boolean
}

export const Button = ({
  children,
  id,
  onClick,
  leftIcon,
  rightIcon,
  className,
  type = 'button',
  disabled = false,
  theme = 'primary',
  size = 'normal',
  square = false,
}: React.PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center rounded-md font-medium outline-none focus:ring focus:ring-info-30',
        {
          'prose-md h-10 px-4 py-2': size === 'normal',
          'prose-sm p-1.5': size === 'small',
          'prose-xs p-1': size === 'extrasmall',
          'bg-info-70 text-clear hover:bg-info-50':
            theme === 'primary' && !disabled,
          'bg-warning-50 text-clear hover:bg-warning-70':
            theme === 'warning' && !disabled,
          'bg-danger-70 text-clear hover:bg-danger-50':
            theme === 'danger' && !disabled,
          'm-[-2px] border-2 bg-clear text-info-70 hover:bg-grey-10':
            theme === 'clear' && !disabled,
          'bg-grey-70 text-clear hover:bg-grey-50': disabled,
          'rounded-none': square,
        },
        className
      )}
      disabled={disabled}
    >
      <div className="mb-[2px] pr-2">{leftIcon}</div>
      {children}
      <div className="mb-[2px] pl-2">{rightIcon}</div>
    </button>
  )
}
