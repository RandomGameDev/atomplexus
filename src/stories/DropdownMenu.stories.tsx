import type { Meta, StoryObj } from '@storybook/react'

import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Icon,
} from '../'

const meta = {
  title: 'Atoms/DropdownMenu',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

interface DropItem {
  name: string
  isActive: boolean
}

const BaseDropdown = (): JSX.Element => {
  const [dropItem, setDropItem] = useState<DropItem[]>([
    { name: 'Cat', isActive: true },
    { name: 'Dog', isActive: false },
    { name: 'Bird', isActive: false },
  ])

  return (
    <DropdownMenu
      variant="outline"
      label={
        <>
          <Icon name="SlidersHorizontal" size="xs" />
          View Animals
        </>
      }
      align="end"
    >
      <DropdownMenuLabel>Toggle Animals</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {dropItem?.map((item) => {
        return (
          <DropdownMenuCheckboxItem
            key={item.name}
            className="capitalize"
            checked={item.isActive}
            onCheckedChange={(value) =>
              setDropItem((prevValue) =>
                prevValue.map((val) =>
                  val.name === item.name
                    ? { name: val.name, isActive: value }
                    : { name: val.name, isActive: val.isActive }
                )
              )
            }
          >
            {item.name}
          </DropdownMenuCheckboxItem>
        )
      })}
    </DropdownMenu>
  )
}

export const Base: Story = {
  render: () => <BaseDropdown />,
}
