import CreatorLists from "@/components/UseContextDemo/CreatorLists"

export default function UseContextPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <CreatorLists />
      </div>
    </div>
  )
}