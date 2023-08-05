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
    theme: 'warning',
  },
}

export const Danger: Story = {
  args: {
    children: 'New Assessment',
    theme: 'danger',
  },
}

export const Clear: Story = {
  args: {
    children: 'New Assessment',
    theme: 'clear',
  },
}

export const Small: Story = {
  args: {
    children: 'New Assessment',
    size: 'small',
  },
}

export const ExtraSmall: Story = {
  args: {
    children: 'New Assessment',
    size: 'extrasmall',
  },
}

export const Disabled: Story = {
  args: {
    children: 'New Assessment',
    size: 'small',
    disabled: true,
  },
}

export const Square: Story = {
  args: {
    children: 'New Assessment',
    square: true,
  },
}
