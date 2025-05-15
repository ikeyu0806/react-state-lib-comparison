import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import RecruitmentStatusComponent from './page'

const meta = {
  component: RecruitmentStatusComponent,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RecruitmentStatusComponent>

type Story = StoryObj<typeof meta>

export default {
  title: 'Components/XState/RecruitmentStatusComponent',
  component: RecruitmentStatusComponent,
} as Meta

export const Default: Story = {
  render: () => <RecruitmentStatusComponent />,
}
