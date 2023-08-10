import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { cn } from 'src/lib/utils'

const buttonVariants = cva(
  'flex items-center justify-center rounded-md font-medium outline-none focus:ring transition-colors focus:ring-info-30 disabled:pointer-events-none disabled:opacity-50 disabled:text-clear disabled:bg-grey-70 disabled:hover:bg-grey-50',
  {
    variants: {
      variant: {
        default: 'bg-info-70 text-clear hover:bg-info-50',
        warning: 'bg-warning-50 text-clear hover:bg-warning-70',
        danger: 'bg-danger-70 text-clear hover:bg-danger-50',
        clear: 'm-[-2px] border-2 bg-clear text-info-70 hover:bg-grey-10',
      },
      size: {
        default: 'prose-md h-10 px-4 py-2',
        sm: 'prose-sm p-1.5',
        xs: 'prose-xs p-1',
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

interface Button2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  square?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Button2Props>(
  (
    {
      leftIcon,
      rightIcon,
      variant,
      size,
      className,
      children,
      square = false,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className, square }))}
        ref={ref}
        {...props}
      >
        <div className="mb-[2px] pr-2">{leftIcon}</div>
        {children}
        <div className="mb-[2px] pl-2">{rightIcon}</div>
      </button>
    )
  }
)

export { Button, type Button2Props }
