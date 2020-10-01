import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back',
    subtitle: "Come see John's new adventures",
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/link'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
)
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
