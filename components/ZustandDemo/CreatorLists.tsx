import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useCreatorStore } from '@/store/zustand/creator_store'

export default function CreatorLists() {
  const unselectedCreators = useCreatorStore(
    (state) => state.unselectedCreators,
  )
  const addToSelected = useCreatorStore((state) => state.addToSelected)
  return (
    <div className="my-4">
      {unselectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => addToSelected(creator)}
          isSelected={false}
        />
      ))}
    </div>
  )
}
