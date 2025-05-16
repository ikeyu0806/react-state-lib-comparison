'use client'

import StoreProvider from './StoreProvider'
import CreatorLists from '@/components/Redux/CreatorLists'
import CandidatesLists from '@/components/Redux/CandidatesLists'
// import CandidatesInsights from '@/components/Redux/CandidatesInsights'

export default function ReduxPage() {
  return (
    <StoreProvider>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 my-4 p-4">
          <h1 className="text-2xl font-bold">Redux Demo</h1>
          <p className="text-gray-600">
            Reduxを使ったコンポーネントのデモです。
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
        {/* <div className="col-span-4 my-4 p-4">
        <CandidatesInsights />
      </div> */}
      </div>
    </StoreProvider>
  )
}
