import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { cn } from 'src/lib/utils'

const buttonVariants = cva(
  'flex gap-1.5 items-center justify-center rounded-md font-medium outline-none focus:ring transition-colors focus:ring-info-30 disabled:pointer-events-none disabled:opacity-50 disabled:text-clear disabled:bg-grey-70 disabled:hover:bg-grey-50 whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'bg-info-70 text-clear hover:bg-info-50',
        success: 'bg-success-70 text-clear hover:bg-success-50',
        warning: 'bg-warning-50 text-clear hover:bg-warning-70',
        danger: 'bg-danger-70 text-clear hover:bg-danger-50',
        clear: 'm-[-2px] border-2 bg-clear text-info-70 hover:bg-grey-10',
      },
      size: {
        default: 'prose-md leading-5 h-10 px-4 py-3',
        sm: 'prose-sm leading-4 h-8 px-3 py-2',
        xs: 'prose-xs leading-3 h-6 px-2 py-1',
      },
      square: {
        true: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  square?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      className,
      children,
      type = 'button',
      square = false,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, className, square }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export { Button, type ButtonProps }
