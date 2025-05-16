import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { removeFromSelected } from '@/redux/creatorSlice'

export default function CandidatesLists() {
  const selectedCreators = useSelector(
    (state: RootState) => state.creator.selectedCreators,
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
