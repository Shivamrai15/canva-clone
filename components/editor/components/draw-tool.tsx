"use client";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import {
    EraserIcon,
    HighlighterIcon,
    MarkerIcon,
    PencilIcon
} from "./icons";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tool } from "../hooks/types";

interface DrawProps {
    activeTool: Tool;
    onClose : ()=>void;
}


export const Draw = ({
    activeTool,
    onClose
}: DrawProps) => {


    return (
        <div className={cn(
            "absolute hidden top-0 left-4 w-full md:h-full md:w-24 overflow-hidden z-20",
            activeTool === "DRAW" && "block"
        )}>
            <div className="hidden h-full w-full md:flex flex-col justify-center gap-y-4">
                <div className="flex w-16 items-center justify-start">  
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="flex w-full items-center justify-center " >
                                <div 
                                    className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                                    onClick={onClose}
                                >
                                    <X className="h-4 w-4"/>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Close
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="w-16 rounded-2xl bg-white shadow-lg py-4 space-y-2">
                    <div className="h-9 w-full relative flex items-center">
                        <PencilIcon className="w-24 shrink-0 -translate-x-10 cursor-pointer hover:-translate-x-3 text-[#0571d3] transition-all duration-500" />
                    </div>
                    <div className="h-9 w-full relative flex items-center">
                        <MarkerIcon className="w-24 shrink-0 -translate-x-10 cursor-pointer hover:-translate-x-3 text-[#e7191f] transition-all duration-500" />
                    </div>
                    <div className="h-9 w-full relative flex items-center">
                        <HighlighterIcon className="w-24 shrink-0 -translate-x-10 cursor-pointer hover:-translate-x-3 text-[#fff234] transition-all duration-500" />
                    </div>
                    <div className="h-9 w-full relative flex items-center">
                        <EraserIcon className="w-24 shrink-0 -translate-x-10 cursor-pointer hover:-translate-x-3 text-[#e7191f] transition-all duration-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}
