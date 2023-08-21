import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { Button, Icon } from '../'

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

export const Success: Story = {
  args: {
    children: 'New Assessment',
    variant: 'success',
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

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button>
        <Icon name="FilePlus2" />
        New Assessment
      </Button>
      <Button size="sm" variant="clear">
        <Icon name="FilePlus2" size="sm" />
        New Assessment
      </Button>
      <Button size="sm">
        <Icon name="FilePlus2" size="sm" />
        New Assessment
      </Button>
      <Button size="xs">
        <Icon name="FilePlus2" size="xs" />
        New Assessment
      </Button>
    </div>
  ),
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
