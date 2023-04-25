import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus provident saepe rem, recusandae ex corrupti facere fugit autem praesentium a quam placeat minima dolor voluptas deserunt consequatur explicabo maiores odio.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
