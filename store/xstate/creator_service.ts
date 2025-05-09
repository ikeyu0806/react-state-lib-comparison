import { createMachine, assign, AnyEventObject } from 'xstate'
import { Creator } from '@/types/creator'

export const creatorMachine = createMachine({
  id: 'creator',
  initial: 'selection',
  context: {
    selectedCreators: [
      { name: 'クリエイター5', followers: 5000, totalLikes: 50000 },
      { name: 'クリエイター6', followers: 6000, totalLikes: 60000 },
      { name: 'クリエイター7', followers: 7000, totalLikes: 70000 },
      { name: 'クリエイター8', followers: 8000, totalLikes: 80000 },
    ] as Creator[],
    unselectedCreators: [
      { name: 'クリエイター1', followers: 1000, totalLikes: 10000 },
      { name: 'クリエイター2', followers: 2000, totalLikes: 20000 },
      { name: 'クリエイター3', followers: 3000, totalLikes: 30000 },
      { name: 'クリエイター4', followers: 4000, totalLikes: 40000 },
    ] as Creator[],
  },
  states: {
    selection: {
      on: {
        ADD_TO_SELECTED: {
          actions: assign({
            selectedCreators: (_, event: any) =>
              event.selectedCreators.filter(
                (creator: Creator) => creator.name !== event.creator.name,
              ),
            unselectedCreators: (_, event: any) => [
              ...event.unselectedCreators,
              event.creator,
            ],
          }),
        },
      },
    },
    unselection: {
      on: {
        REMOVE_FROM_SELECTED: {
          actions: assign({
            selectedCreators: (_, event: any) => [
              ...event.selectedCreators,
              event.creator,
            ],
            unselectedCreators: (_, event: any) =>
              event.unselectedCreators.filter(
                (creator: Creator) => creator.name !== event.creator.name,
              ),
          }),
        },
      },
    }
  },
})
