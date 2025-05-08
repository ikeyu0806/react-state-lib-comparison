import React, { useContext } from 'react'
import {
  SelectedCreatorContext,
  UnselectedCreatorContext,
} from '@/app/use_context/page'
import CreatorCard from './CreatorCard'
import { Creator } from '@/types/creator'

export default function CandidatesLists() {
  const [selectedCreators, setSelectedCreators] = useContext(
    SelectedCreatorContext,
  )
  const [unselectedCreators, setUnselectedCreators] = useContext(
    UnselectedCreatorContext,
  )

  const handleClick = (creator: Creator) => {
    const newSelectedCreators = selectedCreators.filter(
      (c) => c.name !== creator.name,
    )

    const newUnselectedCreators = [...unselectedCreators, creator]

    setSelectedCreators(newSelectedCreators)
    setUnselectedCreators(newUnselectedCreators)
  }

  return (
    <div className="my-4">
      {selectedCreators.map((creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => handleClick(creator)}
          isSelected={true}
        />
      ))}
    </div>
  )
}
