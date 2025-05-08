interface CreatorCardProps {
  isSelected: boolean
}

export default function CreatorCard({ isSelected = false }: CreatorCardProps) {
  return (
    <div className="grid grid-cols-12 bg-white border border-gray-200 rounded-lg my-2 p-4 shadow-md">
      <div className="col-span-4">クリエイター名</div>
      <div className="col-span-4"></div>
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
