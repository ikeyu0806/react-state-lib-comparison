import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import CreatorLists from './CreatorLists'
import creatorReducer from '@/redux/creatorSlice'

const mockUnselectedCreators = [
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

const createMockStore = () => {
  return configureStore({
    reducer: {
      creator: creatorReducer,
    },
    preloadedState: {
      creator: {
        unselectedCreators: mockUnselectedCreators,
        selectedCreators: [],
      },
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

const StoreWrapper = ({ children }: { children: React.ReactNode }) => {
  const store = createMockStore()

  const originalDispatch = store.dispatch
  store.dispatch = ((action: { type: string; payload?: any }) => {
    if (action.type === 'creator/addToSelected') {
      console.log('Added to selected:', action.payload)
    }
    return originalDispatch(action)
  }) as typeof store.dispatch

  return <Provider store={store}>{children}</Provider>
}

const meta = {
  title: 'Components/Redux/CreatorLists',
  component: CreatorLists,
  parameters: {},
  tags: ['autodocs'],
  decorators: [
    (Story: React.FC) => (
      <StoreWrapper>
        <Story />
      </StoreWrapper>
    ),
  ],
} satisfies Meta<typeof CreatorLists>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
