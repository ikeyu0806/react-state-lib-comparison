'use client'

import { createContext, useReducer } from 'react'
import CreatorLists from '@/components/UseContextDemo/CreatorLists'
import CandidatesLists from '@/components/UseContextDemo/CandidatesLists'
import CandidatesInsights from '@/components/UseContextDemo/CandidatesInsights'
import { Creator } from '@/types/creator'

// Reducer関数
const creatorReducer = (state: Creator[], action: { type: string; creator: Creator }) => {
  switch (action.type) {
    case 'ADD_TO_SELECTED':
      return [...state, action.creator]
    case 'REMOVE_FROM_SELECTED':
      return state.filter((creator) => creator.name !== action.creator.name)
    default:
      return state
  }
}

export const UnselectedCreatorContext = createContext<
  [Creator[], React.Dispatch<any>]
>([[], () => {}])
export const SelectedCreatorContext = createContext<
  [Creator[], React.Dispatch<any>]
>([[], () => {}])

export default function UseContextPage() {
  const initialUnselectedCreators: Creator[] = [
    { name: 'クリエイター1', followers: 1000, totalLikes: 10000 },
    { name: 'クリエイター2', followers: 2000, totalLikes: 20000 },
    { name: 'クリエイター3', followers: 3000, totalLikes: 30000 },
    { name: 'クリエイター4', followers: 4000, totalLikes: 40000 },
  ]
  const initialSelectedCreators: Creator[] = [
    { name: 'クリエイター5', followers: 5000, totalLikes: 50000 },
    { name: 'クリエイター6', followers: 6000, totalLikes: 60000 },
    { name: 'クリエイター7', followers: 7000, totalLikes: 70000 },
    { name: 'クリエイター8', followers: 8000, totalLikes: 80000 },
  ]

  const [unselectedCreators, dispatchUnselected] = useReducer(
    creatorReducer,
    initialUnselectedCreators
  )
  const [selectedCreators, dispatchSelected] = useReducer(
    creatorReducer,
    initialSelectedCreators
  )

  return (
    <UnselectedCreatorContext.Provider value={[unselectedCreators, dispatchUnselected]}>
      <SelectedCreatorContext.Provider value={[selectedCreators, dispatchSelected]}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 my-4 p-4">
            <h1 className="text-2xl font-bold">UseContext Demo</h1>
            <p className="text-gray-600">
              UseContextを使ったコンポーネントのデモです。
              <br />
              クリエイターを選定するためのコンポーネントです。
            </p>
          </div>
          <div className="col-span-4 my-4 p-4">
            <CreatorLists />
          </div>
          <div className="col-span-4 my-4 p-4">
            <CandidatesLists />
          </div>
          <div className="col-span-4 my-4 p-4">
            <CandidatesInsights />
          </div>
        </div>
      </SelectedCreatorContext.Provider>
    </UnselectedCreatorContext.Provider>
  )
}
