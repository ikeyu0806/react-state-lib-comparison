import React from 'react'
import { useAtomValue } from 'jotai'
import { selectedCreatorsAtom } from '@/store/jotai/creator_atoms'

export default function CandidatesInsights() {
  const selectedCreators = useAtomValue(selectedCreatorsAtom)
  return (
    <div className="my-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <div>
        合計フォロワー数:{' '}
        {selectedCreators.reduce((accumulator, creator) => {
          return accumulator + creator.followers
        }, 0)}
        人
      </div>
      <div>
        合計いいね数:{' '}
        {selectedCreators.reduce((accumulator, creator) => {
          return accumulator + creator.totalLikes
        }, 0)}
      </div>
      <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">
        選定を確定する
      </button>
    </div>
  )
}
