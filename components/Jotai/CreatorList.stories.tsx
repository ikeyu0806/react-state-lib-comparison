// CreatorLists.stories.tsx

import React, { ReactNode } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import CreatorLists from './CreatorLists'
import { useAtom, useSetAtom } from 'jotai'
import {
  selectedCreatorsAtom,
  unselectedCreatorsAtom,
} from '@/store/jotai/creator_atoms'
import { Creator } from '@/types/creator'

const meta = {
  component: CreatorLists,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreatorLists>

type Story = StoryObj<typeof meta>

// モックデータを作成
const mockUnselectedCreators = [
  {
    name: 'Creator One',
    followers: 1000,
    totalLikes: 5000,
  },
  {
    name: 'Creator Two',
    followers: 2000,
    totalLikes: 8000,
  },
  {
    name: 'Creator Three',
    followers: 1500,
    totalLikes: 6000,
  },
]

// Storybook 用のラッパーコンポーネント
const Wrapper = ({ children }: { children: ReactNode }) => {
  // Jotai ストアのモック
  const [_, setUnselectedCreators] = useAtom(unselectedCreatorsAtom)
  setUnselectedCreators(mockUnselectedCreators)

  return <div>{children}</div>
}

export default {
  title: 'Components/Jotai/CreatorLists',
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
