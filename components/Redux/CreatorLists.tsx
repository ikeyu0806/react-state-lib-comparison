import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { addToSelected } from '@/redux/creatorSlice'

export default function CreatorLists() {
  const dispatch = useDispatch()
  const unselectedCreators = useSelector(
    (state: RootState) => state.creator.unselectedCreators,
  )
  return (
    <div className="my-4">
      {unselectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => dispatch(addToSelected(creator))}
          isSelected={false}
        />
      ))}
    </div>
  )
}
