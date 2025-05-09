import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useAtom, useSetAtom } from 'jotai'
import { selectedCreatorsAtom, unselectedCreatorsAtom } from '@/store/jotai/creator_atoms'

export default function CandidatesLists() {
  const [selectedCreators, setSelectedCreators] = useAtom(selectedCreatorsAtom)
  const setUnselectedCreators = useSetAtom(unselectedCreatorsAtom)

  return (
    <div className="my-4">
      {selectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => {
            setUnselectedCreators((prev) => [...prev, creator])
            setSelectedCreators((prev) =>
              prev.filter((c) => c.name !== creator.name),
            )
          }}
          isSelected={true}
        />
      ))}
    </div>
  )
}
