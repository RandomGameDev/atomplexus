import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '../'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: 'Badge me',
  },
}

export const Variant: Story = {
  args: {
    children: 'Badge me',
    variant: 'success',
  },
}
