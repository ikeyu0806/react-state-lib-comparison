import React, { ReactNode } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import CreatorLists from './CreatorLists'
import {
  SelectedCreatorContext,
  UnselectedCreatorContext,
} from '@/app/use_context/page'
import { Creator } from '@/types/creator'

const meta = {
  component: CreatorLists,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreatorLists>

type Story = StoryObj<typeof meta>

const mockUnselectedCreators: Creator[] = [
  {
    name: 'クリエイター',
    followers: 1000,
    totalLikes: 5000,
  },
  {
    name: 'クリエイター2',
    followers: 2000,
    totalLikes: 8000,
  },
  {
    name: 'クリエイター3',
    followers: 1500,
    totalLikes: 6000,
  },
]

const mockDispatchSelected = () => {}
const mockDispatchUnselected = () => {}

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SelectedCreatorContext.Provider value={[[], mockDispatchSelected]}>
      <UnselectedCreatorContext.Provider
        value={[mockUnselectedCreators, mockDispatchUnselected]}
      >
        {children}
      </UnselectedCreatorContext.Provider>
    </SelectedCreatorContext.Provider>
  )
}

export default {
  title: 'Components/UseContext/CreatorLists',
  component: CreatorLists,
  decorators: [
    (Story: React.FC) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} as Meta

const Template: Story = {
  render: () => <CreatorLists />,
}

export const Default = Template
Default.args = {}
