import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { cn } from 'src/lib/utils'

const buttonVariants = cva(
  'flex items-center justify-center outline-none focus:ring transition-colors focus:ring-info-30 disabled:pointer-events-none disabled:opacity-50 disabled:text-clear disabled:bg-grey-70 disabled:hover:bg-grey-50 whitespace-nowrap font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-info-70 text-clear hover:bg-info-50 focus:bg-info-50',
        success:
          'bg-success-70 text-clear hover:bg-success-50 focus:bg-success-50',
        warning:
          'bg-warning-50 text-clear hover:bg-warning-70 focus:bg-warning-70',
        danger: 'bg-danger-70 text-clear hover:bg-danger-50 focus:bg-danger-50',
        outline:
          'm-[-2px] border-2 bg-clear text-info-70 hover:bg-grey-10 focus:bg-grey-10',
        ghost: 'hover:bg-grey-30 text-grey-90 bg-transparent focus:bg-grey-30',
        link: 'bg-transparent hover:underline underline-offset-4 text-dim',
      },
      size: {
        default: 'prose-sm leading-4 h-10 px-3 py-2 gap-2 rounded-md',
        sm: 'prose-sm leading-4 h-8 px-2.5 py-1.5 gap-1.5 rounded-md',
        xs: 'prose-xs leading-3 h-6 px-2 py-1 gap-1 rounded',
      },
      square: {
        true: 'rounded-none',
      },
      icon: {
        true: 'p-1 aspect-square',
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
  icon?: boolean
  square?: boolean
  propagate?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      onClick,
      className,
      children,
      type = 'button',
      icon = false,
      square = false,
      propagate = false,
      ...props
    },
    ref
  ): JSX.Element => {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (onClick) {
        onClick(event)
      }

      if (!propagate) event.stopPropagation()
    }

    return (
      <button
        type={type}
        className={cn(
          buttonVariants({ variant, size, className, square, icon })
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export { Button, type ButtonProps }
