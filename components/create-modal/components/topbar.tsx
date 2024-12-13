import { Search } from "@/components/ui/search"


export const Topbar = () => {
    return (
        <div className="h-full w-full flex items-center px-6">
            <Search
                placeholder="What would you like to create?"
            />
        </div>
    )
}
