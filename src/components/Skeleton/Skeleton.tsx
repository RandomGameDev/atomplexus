import { cn } from 'src/lib/utils'

export interface SkeletonProps {
  children?: React.ReactNode
  className?: string
}

export const Skeleton = ({
  children,
  className,
}: SkeletonProps): JSX.Element => {
  return (
    <div className={cn('animate-pulse rounded-md bg-grey-50/50', className)}>
      {children}
    </div>
  )
}
