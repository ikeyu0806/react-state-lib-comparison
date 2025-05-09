import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useMachine } from '@xstate/react'
import { creatorMachine } from '@/store/xstate/creator_service'

export default function CreatorLists() {
  const [current, send] = useMachine(creatorMachine)
  const selectCreator = (creator: Creator) => {
    send({ type: 'SELECT_CREATOR', creator })
  }

  return (
    <div className="my-4">
      {current.context.unselectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => selectCreator(creator)}
          isSelected={false}
        />
      ))}
    </div>
  )
}
