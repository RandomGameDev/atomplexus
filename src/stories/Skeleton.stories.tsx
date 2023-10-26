import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { Skeleton } from '../'

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: () => (
    <div className="flex h-64 w-80 flex-col gap-4 pt-6">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="mt-10 h-52 w-full" />
    </div>
  ),
}
