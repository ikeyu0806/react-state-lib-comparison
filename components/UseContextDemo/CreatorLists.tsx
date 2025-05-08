import React, { useContext } from 'react'
import { SelectedCreatorContext } from '@/app/use_context/page'
import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'

export default function CreatorLists() {
  const selectedCreators = useContext<Creator[]>(SelectedCreatorContext)
  return (
    <div className="my-4">
      {selectedCreators.map((creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => (event: React.MouseEvent) => {
            console.log(event)
          }}
          isSelected={false}
        />
      ))}
    </div>
  )
}
