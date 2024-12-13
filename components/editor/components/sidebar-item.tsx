"use client";

import { Icon } from "@/types";
import { Tool } from "../hooks/types";

interface SidebarItemProps {
    label: string;
    icon : ({ className, style }: Icon ) => JSX.Element;
    activeIcon : ({ className, style }: Icon ) => JSX.Element;
    color: string;
    activeTool : Tool,
    onChangeActiveTool : (activeTool: Tool)=>void;
    tool: Tool
}

export const SidebarItem = ({
    label,
    icon : Icon,
    activeIcon : ActiveIcon,
    activeTool,
    color,
    onChangeActiveTool,
    tool 
}: SidebarItemProps )=> {

    return (
        <li 
            className='w-full aspect-square py-2 space-y-1'
            onClick={()=>onChangeActiveTool(tool)}
        >
            <div className='mx-auto h-9 w-9 flex items-center justify-center hover:shadow-xl group hover:bg-white hover:dark:bg-[#252627] hover:border dark:hover:border-zinc-700 rounded-lg transition-all md:cursor-pointer'>
                {
                    activeTool === tool ? (
                        <ActiveIcon className='h-7 w-7' style={{color}} />
                    ) : (
                        <>
                            <Icon className='h-7 w-7 group-hover:hidden text-zinc-800 dark:text-zinc-300' />
                            <ActiveIcon className='h-7 w-7 hidden group-hover:block' style={{color}} />
                        </>
                    )
                }
            </div>
            <span className='text-xs block text-zinc-800 dark:text-zinc-300 font-medium text-center tracking-tighter'>{label}</span>
        </li>
    )
}
