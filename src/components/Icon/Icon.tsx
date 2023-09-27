import type { LucideProps } from 'lucide-react'
import { icons } from 'lucide-react'
import { cn } from 'src/lib/utils'

interface IconProps extends LucideProps {
  name: keyof typeof icons
  size?: 'default' | 'sm' | 'xs' | '2xs' | string | number
  spin?: boolean
}

const Icon = ({
  name,
  className,
  spin = false,
  size = 'default',
  ...props
}: IconProps): JSX.Element => {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      className={cn({ 'animate-spin': spin }, className)}
      size={
        size === 'default'
          ? 20
          : size === 'sm'
          ? 18
          : size === 'xs'
          ? 16
          : size === '2xs'
          ? 14
          : size
      }
      {...props}
    />
  )
}

export { Icon, type IconProps }
