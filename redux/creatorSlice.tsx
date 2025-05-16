import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Creator } from '@/types/creator'

interface CreatorState {
  selectedCreators: Creator[]
  unselectedCreators: Creator[]
}

const initialState: CreatorState = {
  unselectedCreators: [
    { name: 'クリエイター1', followers: 1000, totalLikes: 10000 },
    { name: 'クリエイター2', followers: 2000, totalLikes: 20000 },
    { name: 'クリエイター3', followers: 3000, totalLikes: 30000 },
    { name: 'クリエイター4', followers: 4000, totalLikes: 40000 },
  ],
  selectedCreators: [
    { name: 'クリエイター5', followers: 5000, totalLikes: 50000 },
    { name: 'クリエイター6', followers: 6000, totalLikes: 60000 },
    { name: 'クリエイター7', followers: 7000, totalLikes: 70000 },
    { name: 'クリエイター8', followers: 8000, totalLikes: 80000 },
  ],
}

const creatorSlice = createSlice({
  name: 'creator',
  initialState,
  reducers: {
    addToSelected: (state, action: PayloadAction<Creator>) => {
      const creator = action.payload
      state.selectedCreators.push(creator)
      state.unselectedCreators = state.unselectedCreators.filter(
        (c) => c.name !== creator.name,
      )
    },
    removeFromSelected: (state, action: PayloadAction<Creator>) => {
      const creator = action.payload
      state.selectedCreators = state.selectedCreators.filter(
        (c) => c.name !== creator.name,
      )
      state.unselectedCreators.push(creator)
    },
  },
})

export const { addToSelected, removeFromSelected } = creatorSlice.actions

export default creatorSlice.reducer
