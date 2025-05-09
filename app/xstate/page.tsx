'use client'

import CreatorLists from '@/components/XState/CreatorLists'
import CandidatesLists from '@/components/XState/CandidatesLists'
// import CandidatesInsights from '@/components/XState/CandidatesInsights'

export default function XStatePage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 my-4 p-4">
        <h1 className="text-2xl font-bold">XState Demo</h1>
        <p className="text-gray-600">
          XStateを使ったコンポーネントのデモです。
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
  )
}
