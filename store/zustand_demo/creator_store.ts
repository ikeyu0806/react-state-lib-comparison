import { create } from 'zustand'
import { Creator } from '@/types/creator'

interface CreatorState {
  selectedCreators: Creator[]
  unselectedCreators: Creator[]
  addToSelected: (creator: Creator) => void
  removeFromSelected: (creator: Creator) => void
}

export const useCreatorStore = create<CreatorState>((set) => ({
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
  addToSelected: (creator) =>
    set((state) => ({
      selectedCreators: [...state.selectedCreators, creator],
      unselectedCreators: state.unselectedCreators.filter(
        (c) => c.name !== creator.name
      ),
    })),
  removeFromSelected: (creator) =>
    set((state) => ({
      selectedCreators: state.selectedCreators.filter(
        (c) => c.name !== creator.name
      ),
      unselectedCreators: [...state.unselectedCreators, creator],
    })),
}))
