'use client'

import { createContext, useState } from 'react'
import CreatorLists from '@/components/UseContextDemo/CreatorLists'
import CandidatesLists from '@/components/UseContextDemo/CandidatesLists'
import CandidatesInsights from '@/components/UseContextDemo/CandidatesInsights'
import { Creator } from '@/types/creator'

export const UnselectedCreatorContext = createContext<
  [Creator[], React.Dispatch<React.SetStateAction<Creator[]>>]
>([[], () => {}])
export const SelectedCreatorContext = createContext<
  [Creator[], React.Dispatch<React.SetStateAction<Creator[]>>]
>([[], () => {}])

export default function UseContextPage() {
  const [unselectedCreators, setUnselectedCreators] = useState<Creator[]>([
    {
      name: 'クリエイター1',
      followers: 1000,
      totalLikes: 10000,
    },
    {
      name: 'クリエイター2',
      followers: 2000,
      totalLikes: 20000,
    },
    {
      name: 'クリエイター3',
      followers: 3000,
      totalLikes: 30000,
    },
    {
      name: 'クリエイター4',
      followers: 4000,
      totalLikes: 40000,
    },
  ])
  const [selectedCreators, setSelectedCreators] = useState<Creator[]>([
    {
      name: 'クリエイター5',
      followers: 5000,
      totalLikes: 50000,
    },
    {
      name: 'クリエイター6',
      followers: 6000,
      totalLikes: 60000,
    },
    {
      name: 'クリエイター7',
      followers: 7000,
      totalLikes: 70000,
    },
    {
      name: 'クリエイター8',
      followers: 8000,
      totalLikes: 80000,
    },
  ])

  return (
    <UnselectedCreatorContext.Provider
      value={[unselectedCreators, setUnselectedCreators]}
    >
      <SelectedCreatorContext.Provider
        value={[selectedCreators, setSelectedCreators]}
      >
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
