"use client";

import { Editor, Tool } from "@/components/editor/hooks/types";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";


interface ElementsToolProps {
    editor: Editor | undefined;
    activeTool: Tool;
    onChangeActiveTool: (tool: Tool) => void;
};

export const ElementsTool = ({
    activeTool,
    editor,
    onChangeActiveTool
}: ElementsToolProps) => {

    return (
        <aside
            className={cn(
                "bg-white z-[40] w-full md:w-80 h-full flex flex-col relative group dark:bg-[#252627]",
                activeTool === "ELEMENTS" ? "visible" : "hidden",
            )}
        >
            <div className="absolute hidden md:group-hover:flex hover:md:flex -right-16 h-16 w-16 items-center justify-center">
                <div 
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-[#252627] dark:border dark:border-zinc-700 shadow-xl cursor-pointer"
                    onClick={()=>onChangeActiveTool("SELECT")}
                >
                    <X className="h-5 w-5" />
                </div>
            </div>   
        </aside>
    )
}