import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useAtom, useSetAtom } from 'jotai'
import { selectedCreatorsAtom, unselectedCreatorsAtom } from '@/store/jotai/creator_atoms'

export default function CreatorLists() {
  const setSelectedCreators = useSetAtom(selectedCreatorsAtom)
  const [unselectedCreators, setUnselectedCreators] = useAtom(unselectedCreatorsAtom)

  return (
    <div className="my-4">
      {unselectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => {
            setSelectedCreators((prev) => [...prev, creator])
            setUnselectedCreators((prev) =>
              prev.filter((c) => c.name !== creator.name),
            )
          }}
          isSelected={false}
        />
      ))}
    </div>
  )
}
