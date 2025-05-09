import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useCreatorStore } from '@/store/zustand/creator_store'

export default function CandidatesLists() {
  const selectedCreators = useCreatorStore((state) => state.selectedCreators)
  const removeFromSelected = useCreatorStore(
    (state) => state.removeFromSelected,
  )
  return (
    <div className="my-4">
      {selectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => removeFromSelected(creator)}
          isSelected={true}
        />
      ))}
    </div>
  )
}
