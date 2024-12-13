"use client";

import { Editor, Tool } from "@/components/editor/hooks/types";
import { MagicWriteIcons, TextIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";


interface TextToolProps {
    editor: Editor | undefined;
    activeTool: Tool;
    onChangeActiveTool: (tool: Tool) => void;
};

export const TextTool = ({
    activeTool,
    editor,
    onChangeActiveTool
}: TextToolProps) => {

    return (
        <aside
            className={cn(
                "bg-white z-[40] w-full md:w-80 h-full flex flex-col relative group dark:bg-[#252627]",
                activeTool === "TEXT" ? "visible" : "hidden",
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
            <div className="w-full px-4 pt-4 flex flex-col gap-y-2">
                <Button
                    variant="original"
                    className="w-full text-white gap-0"
                    onClick={() => editor?.addText("Textbox")}
                >
                    <TextIcon className="h-7 w-7"/>
                    <span className="tracking-tighter text-sm font-semibold">
                        Add text box
                    </span>
                </Button>
                <Button
                    variant="outline"
                    className="w-full gap-x-2 border-zinc-300 dark:bg-transparent dark:border-zinc-600 dark:hover:bg-neutral-700/80"
                >
                    <MagicWriteIcons className="h-6 w-6"/>
                    <span className="tracking-tighter text-sm font-semibold">
                        Magic Write
                    </span>
                </Button>
            </div>
            <div className="w-full px-4 pt-6 flex flex-col gap-y-2">
                <h2 className="text-zinc-800 font-semibold tracking-tighter dark:text-zinc-50">Default text styles</h2>
                <Button
                    variant="outline"
                    className="w-full gap-x-2 border-zinc-300 dark:bg-transparent dark:border-zinc-600 dark:hover:bg-neutral-700/80 justify-start py-2 h-auto px-4"
                    onClick={() => editor?.addText("Add a heading", {
                        fontSize: 80,
                        fontWeight: 700,
                    })}
                >
                    <span className="tracking-tight text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
                        Add a heading
                    </span>
                </Button>
                <Button
                    variant="outline"
                    className="w-full gap-x-2 border-zinc-300 dark:bg-transparent dark:border-zinc-600 dark:hover:bg-neutral-700/80 justify-start py-2 h-auto px-4"
                    onClick={() => editor?.addText("Add a subheading", {
                        fontSize: 44,
                        fontWeight: 600,
                    })}
                >
                    <span className="tracking-tight text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                        Add a subheading
                    </span>
                </Button>
                <Button
                    variant="outline"
                    className="w-full gap-x-2 border-zinc-300 dark:bg-transparent dark:border-zinc-600 dark:hover:bg-neutral-700/80 justify-start px-4"
                    onClick={() => editor?.addText("Add a little bit of body text", {
                        fontSize: 20,
                    })}
                >
                    <span className="tracking-tighter text-sm text-zinc-800 dark:text-zinc-100">
                        Add a little bit of body text
                    </span>
                </Button>
            </div>
        </aside>
    )
}
