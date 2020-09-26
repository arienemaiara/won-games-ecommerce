import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back',
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/link'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
