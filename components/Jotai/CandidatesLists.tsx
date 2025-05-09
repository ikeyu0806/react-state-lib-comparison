import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useAtom } from 'jotai'
import { selectedCreatorsAtom } from '@/store/jotai/creator_atoms'

export default function CandidatesLists() {
  const [selectedCreators, setSelectedCreators] = useAtom(selectedCreatorsAtom)
  return (
    <div className="my-4">
      {selectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => {
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
