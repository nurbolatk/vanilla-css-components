import * as React from 'react'
import type {Meta, StoryObj} from '@storybook/react'

import {Button} from './index'

export default {
  title: 'Button',
  component: Button
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  render: () => <Button>Button Label</Button>
}

export const Primary: StoryObj<typeof Button> = {
  render: () => <Button color="primary">Button Label</Button>
}

export const Danger: StoryObj<typeof Button> = {
  render: () => <Button color="danger">Button Label</Button>
}