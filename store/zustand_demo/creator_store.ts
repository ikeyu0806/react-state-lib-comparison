import { create } from 'zustand'

interface Creator {
  name: string
}

type Action =
  | { type: 'ADD_TO_SELECTED'; creator: Creator }
  | { type: 'REMOVE_FROM_SELECTED'; creator: Creator }

interface CreatorState {
  selectedCreators: Creator[]
  unselectedCreators: Creator[]
  dispatch: (action: Action) => void
}

export const useCreatorStore = create<CreatorState>((set) => ({
  selectedCreators: [],
  unselectedCreators: [],
  dispatch: (action) =>
    set((state) => {
      switch (action.type) {
        case 'ADD_TO_SELECTED':
          return {
            selectedCreators: [...state.selectedCreators, action.creator],
            unselectedCreators: state.unselectedCreators.filter(
              (creator) => creator.name !== action.creator.name,
            ),
          }
        case 'REMOVE_FROM_SELECTED':
          return {
            selectedCreators: state.selectedCreators.filter(
              (creator) => creator.name !== action.creator.name,
            ),
            unselectedCreators: [...state.unselectedCreators, action.creator],
          }
        default:
          return state
      }
    }),
}))
