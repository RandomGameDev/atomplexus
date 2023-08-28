import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../'

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: 'This is a card',
  },
}

export const Disabled: Story = {
  args: {
    children: 'This is a card',
    disabled: true,
  },
}

export const NoPadding: Story = {
  args: {
    children: 'This is a card',
    noPad: true,
  },
}
