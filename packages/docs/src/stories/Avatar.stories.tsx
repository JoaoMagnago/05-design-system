import { Avatar, AvatarProps } from '@ignite-ui-magnago/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data dispaly/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/joaomagnago.png',
    alt: 'Foto de perfil do João Magnago'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}