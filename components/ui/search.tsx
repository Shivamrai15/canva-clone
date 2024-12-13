import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { SearchIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "w-full flex items-center h-11 px-3 border border-zinc-300 rounded-lg focus-within:border-violet-500",
                    className
                )}
            >
                <SearchIcon className="h-6 w-6" />
                <Input
                    type={type}
                    className="border-none bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)

Search.displayName = "Search";

export { Search }
