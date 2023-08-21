import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    name: 'AlarmCheck',
    size: 24,
  },
}

export const SpinningIcon: Story = {
  args: {
    name: 'Loader2',
    size: 24,
    spin: true,
  },
}
