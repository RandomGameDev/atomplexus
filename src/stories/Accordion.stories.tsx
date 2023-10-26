import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { Accordion, AccordionItem, Button, Icon } from '../'

const meta = {
  title: 'Atoms/Accordion',
  component: Accordion,
  parameters: {},
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem header="Notes" value="item-1">
        This will be the content of the accordion
      </AccordionItem>
      <AccordionItem header="Score" value="item-2">
        Another content for the 2nd accordion
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem header="Notes" value="item-1">
        This will be the content of the accordion
      </AccordionItem>
      <AccordionItem header="Score" value="item-2">
        Another content for the 2nd accordion
      </AccordionItem>
    </Accordion>
  ),
}

export const Disabled: Story = {
  args: {
    type: 'multiple',
    disabled: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem header="Notes" value="item-1">
        This will be the content of the accordion
      </AccordionItem>
      <AccordionItem header="Score" value="item-2">
        Another content for the 2nd accordion
      </AccordionItem>
    </Accordion>
  ),
}

export const IconPosition: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem header="Left Icon" iconPosition="start" value="item-1">
        This will be the content of the accordion
      </AccordionItem>
      <AccordionItem header="Right Icon" iconPosition="end" value="item-2">
        Another content for the 2nd accordion
      </AccordionItem>
      <AccordionItem header="No Icon" iconPosition="none" value="item-3">
        Another content for the 2nd accordion
      </AccordionItem>
    </Accordion>
  ),
}

export const DefaultOpen: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['item-1', 'item-2'],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem header="Notes" value="item-1">
        This will be the content of the accordion
      </AccordionItem>
      <AccordionItem header="Score" value="item-2">
        Another content for the 2nd accordion
      </AccordionItem>
    </Accordion>
  ),
}

const CustomHeaderJSX = () => {
  return (
    <div className="pointer-events-auto flex w-full items-center justify-between">
      <div className="flex flex-col items-start">
        <p className="prose-sm">Header created with ReactNode</p>
        <p className="prose-xs">Hello</p>
        <p className="prose-xs">Hello</p>
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="ghost">
          <Icon name="Scroll" size="sm" />
          Add Assessment
        </Button>
        <Button size="sm" variant="ghost">
          <Icon name="MessagesSquare" size="sm" />
          Add Chat Simulation
        </Button>
      </div>
    </div>
  )
}

export const CustomHeader: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem
        header={CustomHeaderJSX()}
        iconPosition="start"
        value="item-1"
      >
        This will be the content of the accordion
      </AccordionItem>
      <AccordionItem header="Default Header in string" value="item-2">
        Another content for the 2nd accordion
      </AccordionItem>
    </Accordion>
  ),
}

export const NestedAccordion: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem header="Nested Accordion Inside" value="item-1">
        <Accordion type="multiple">
          <AccordionItem header="Nested Accordion Item" value="subitem-1">
            This is nested accordion content
          </AccordionItem>
          <AccordionItem header="Nested Accordion Item" value="subitem-2">
            This is nested accordion content
          </AccordionItem>
        </Accordion>
      </AccordionItem>
      <AccordionItem header="Default Header in string" value="item-2">
        Another content for the 2nd accordion
      </AccordionItem>
    </Accordion>
  ),
}
