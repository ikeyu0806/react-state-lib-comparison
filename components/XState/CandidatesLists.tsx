import { Creator } from '@/types/creator'
import CreatorCard from './CreatorCard'
import { useMachine } from '@xstate/react'
import { creatorMachine } from '@/store/xstate/creator_service'

export default function CandidatesLists() {
  const [current, send] = useMachine(creatorMachine)
  const unselectCreator = (creator: Creator) => {
    send({ type: 'REMOVE_FROM_SELECTED', creator })
  }

  return (
    <div className="my-4">
      {current.context.selectedCreators.map((creator: Creator) => (
        <CreatorCard
          key={creator.name}
          name={creator.name}
          followers={creator.followers}
          totalLikes={creator.totalLikes}
          onClick={() => unselectCreator(creator)}
          isSelected={true}
        />
      ))}
    </div>
  )
}
