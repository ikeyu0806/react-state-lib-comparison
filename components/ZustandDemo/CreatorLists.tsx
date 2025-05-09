// CandidatesLists.tsx

import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'

export default function CreatorLists() {
  return (
    <div className="my-4">
      <CreatorCard
        key={'creator.name'}
        name={'creator.name'}
        followers={100}
        totalLikes={100}
        onClick={() => console.log('Clicked')}
        isSelected={false}
      />
    </div>
  )
}
