'use client'

import CreatorCard from './CreatorCard'

export default function CandidatesLists() {
  return (
    <div className="my-4">
      <CreatorCard
        name="クリエイター名"
        followers={1000}
        totalLikes={10000}
        onClick={() => (event: React.MouseEvent) => {
          console.log(event)
        }}
        isSelected={true}
      />
    </div>
  )
}
