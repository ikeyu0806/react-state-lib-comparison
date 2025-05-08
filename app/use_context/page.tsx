import CreatorLists from "@/components/UseContextDemo/CreatorLists"
import CandidatesLists from "@/components/UseContextDemo/CandidatesLists"

export default function UseContextPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 my-4 p-4">
        <CreatorLists />
      </div>
      <div className="col-span-4 my-4 p-4">
        <CandidatesLists />
      </div>
    </div>
  )
}