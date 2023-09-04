import { Input } from "../ui/input"

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search users..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}
