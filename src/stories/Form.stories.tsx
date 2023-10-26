import type { Meta, StoryObj } from '@storybook/react'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Button,
  Form,
  FormDebug,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
  FormTextArea,
} from '../'

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  message: z.string(),
})

const meta = {
  title: 'Atoms/Form',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const FormStory = (): JSX.Element => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <Form
      methods={form}
      onSubmit={onSubmit}
      className="mt-8 flex flex-col gap-8"
    >
      <FormDebug />
      <FormItem name="name">
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormMessage />
      </FormItem>
      <FormItem name="message">
        <FormLabel>Message</FormLabel>
        <FormTextArea />
        <FormMessage />
      </FormItem>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export const Base: Story = {
  render: () => <FormStory />,
}
