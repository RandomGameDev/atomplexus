import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'src/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2 prose-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-4',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-dim text-clear hover:bg-dim/80',
        secondary:
          'border-transparent bg-secondary-30 text-dim hover:bg-secondary-30/80',
        success: 'border-transparent bg-success text-clear hover:bg-success/80',
        danger: 'border-transparent bg-danger text-clear hover:bg-danger/80',
        outline: 'text-dim',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({
  className,
  variant,
  ...props
}: BadgeProps): JSX.Element => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
