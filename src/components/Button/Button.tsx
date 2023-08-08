import type { StylingProps } from '@customTypes/props'
import clsx from 'clsx'
import React from 'react'
import '../../index.css'

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
        'ap-flex ap-items-center ap-justify-center ap-rounded-md ap-font-medium ap-outline-none focus:ap-ring focus:ap-ring-info-30',
        {
          'ap-prose-md ap-h-10 ap-px-4 ap-py-2': size === 'normal',
          'ap-prose-sm ap-p-1.5': size === 'small',
          'ap-prose-xs ap-p-1': size === 'extrasmall',
          'ap-bg-info-70 ap-text-clear hover:ap-bg-info-50':
            theme === 'primary' && !disabled,
          'ap-bg-warning-50 ap-text-clear hover:ap-bg-warning-70':
            theme === 'warning' && !disabled,
          'ap-bg-danger-70 ap-text-clear hover:ap-bg-danger-50':
            theme === 'danger' && !disabled,
          'ap-m-[-2px] ap-border-2 ap-bg-clear ap-text-info-70 hover:ap-bg-grey-10':
            theme === 'clear' && !disabled,
          'ap-bg-grey-70 ap-text-clear hover:ap-bg-grey-50': disabled,
          'ap-rounded-none': square,
        },
        className
      )}
      disabled={disabled}
    >
      <div className="ap-mb-[2px] ap-pr-2">{leftIcon}</div>
      {children}
      <div className="ap-mb-[2px] ap-pl-2">{rightIcon}</div>
    </button>
  )
}
