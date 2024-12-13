"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { RiShare2Line } from "react-icons/ri";
import { Share } from "./share";
import { ModeToggle } from "@/components/layout/components/theme-toggle-button";
  

export const Header = () => {
    return (
        <header className="h-12 md:h-14 w-full bg-gradient-to-r from-[#00c4cc] to-[#8b3dff]">
            <nav className="w-full flex items-center h-full">
                <div className="w-1/2 h-full">

                </div>
                <div className="w-1/2 h-full flex items-center justify-end p-2">
                    <ModeToggle/>
                    <Popover>
                        <PopoverTrigger className="h-full bg-white/85 hover:bg-white px-3 rounded-lg flex items-center gap-x-1 text-[15px] font-medium text-zinc-800 transition-all" >
                            <RiShare2Line className="h-5 w-5" />
                            Share
                        </PopoverTrigger>
                        <PopoverContent
                            className="hidden sm:block w-96 p-5 py-3 rounded-xl dark:bg-[#252627] dark:border dark:border-zinc-700"
                            align="end"
                        >
                            <Share/>
                        </PopoverContent>
                    </Popover>
                </div>
            </nav>
        </header>
    )
}
