import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: 'New Assessment',
  },
}

export const Warning: Story = {
  args: {
    children: 'New Assessment',
    variant: 'warning',
  },
}

export const Danger: Story = {
  args: {
    children: 'New Assessment',
    variant: 'danger',
  },
}

export const Clear: Story = {
  args: {
    children: 'New Assessment',
    variant: 'clear',
  },
}

export const Small: Story = {
  args: {
    children: 'New Assessment',
    size: 'sm',
  },
}

export const ExtraSmall: Story = {
  args: {
    children: 'New Assessment',
    size: 'xs',
  },
}

export const Disabled: Story = {
  args: {
    children: 'New Assessment',
    size: 'xs',
    disabled: true,
  },
}

export const Square: Story = {
  args: {
    children: 'New Assessment',
    square: true,
  },
}

export const SquareWarning: Story = {
  args: {
    children: 'New Assessment',
    square: true,
    variant: 'warning',
  },
}

export const SquareWarningSmall: Story = {
  args: {
    children: 'New Assessment',
    square: true,
    variant: 'warning',
    size: 'sm',
  },
}
