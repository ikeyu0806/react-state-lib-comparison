// CandidatesLists.tsx

import { useContext } from 'react'
import { SelectedCreatorContext, UnselectedCreatorContext } from '@/app/use_context/page'
import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'

export default function CandidatesLists() {
  const [selectedCreators, dispatchSelected] = useContext(SelectedCreatorContext)
  const [_, dispatchUnselected] = useContext(UnselectedCreatorContext)

  const handleRemoveFromSelected = (creator: Creator) => {
    dispatchSelected({ type: 'REMOVE_FROM_SELECTED', creator })
    dispatchUnselected({ type: 'ADD_TO_SELECTED', creator })
  }

  return (
    <div className="my-4">
      {selectedCreators.map((creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => handleRemoveFromSelected(creator)}
          isSelected={true}
        />
      ))}
    </div>
  )
}
