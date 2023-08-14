import type { LucideProps } from 'lucide-react'
import { icons } from 'lucide-react'
import { cn } from 'src/lib/utils'

interface IconProps extends LucideProps {
  name: keyof typeof icons
  size?: 'default' | 'sm' | 'xs' | string | number
}

const Icon = ({
  name,
  className,
  size = 'default',
  ...props
}: IconProps): JSX.Element => {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      className={cn(className)}
      size={
        size === 'default' ? 20 : size === 'sm' ? 18 : size === 'xs' ? 16 : size
      }
      {...props}
    />
  )
}

export { Icon, type IconProps }
