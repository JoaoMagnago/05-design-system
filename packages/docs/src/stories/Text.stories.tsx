import { Text, TextProps } from '@ignite-ui-magnago/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis reiciendis dignissimos iure quibusdam. Sit, accusantium, illum perspiciatis eos recusandae voluptas voluptatem molestias reiciendis necessitatibus ratione ipsum commodi iste obcaecati itaque.'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
