interface CreatorCardProps {
  name: string
  followers: number
  totalLikes: number
  isSelected: boolean
  onClick: () => void
}

export default function CreatorCard({
  name,
  followers,
  totalLikes,
  onClick,
  isSelected = false,
}: CreatorCardProps) {
  return (
    <div
      onClick={onClick}
      className="grid grid-cols-12 bg-white border border-gray-200 rounded-lg my-2 p-4 shadow-md"
    >
      <div className="col-span-4">{name}</div>
      <div className="col-span-4">
        <div>フォロワー数</div>
        <div>{followers}人</div>
        <div>合計いいね数</div>
        <div>{totalLikes}</div>
      </div>
      <div className="col-span-4">
        {isSelected ? (
          <button className="bg-red-500 text-white rounded-lg px-4 py-2">
            候補から外す
          </button>
        ) : (
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
            選択する
          </button>
        )}
      </div>
    </div>
  )
}
