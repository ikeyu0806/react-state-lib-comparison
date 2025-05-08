// CandidatesLists.tsx

import { useContext } from 'react'
import {
  SelectedCreatorContext,
  UnselectedCreatorContext,
} from '@/app/use_context/page'
import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'

export default function CandidatesLists() {
  const [selectedCreators, dispatchSelected] = useContext(
    SelectedCreatorContext,
  )
  const [unselectedCreators, dispatchUnselected] = useContext(
    UnselectedCreatorContext,
  )

  const handleRemoveFromUnselected = (creator: Creator) => {
    dispatchSelected({ type: 'ADD_TO_SELECTED', creator })
    dispatchUnselected({ type: 'REMOVE_FROM_SELECTED', creator })
  }

  return (
    <div className="my-4">
      {unselectedCreators.map((creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => handleRemoveFromUnselected(creator)}
          isSelected={false}
        />
      ))}
    </div>
  )
}
