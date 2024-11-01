"use client";

import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface TrashButtonProps {
    className?: string;
}

export const TrashButton = ({
    className
}: TrashButtonProps) => {

    const pathname = usePathname();
    const isActive = useMemo(()=>pathname==="/folder/trash", [pathname]);
    
    return (
        <button className={cn(
            "w-full h-10 bg-transparent rounded-lg hover:bg-slate-200 dark:hover:bg-[#ffffff12] px-3 flex items-center gap-x-4 text-zinc-800 dark:text-white font-medium transition-all",
            isActive && "bg-[#7731d81a] dark:bg-[#ffffff1f] text-[#7731d8] dark:text-white",
            className
        )}>
            <Trash2 className="h-5 w-5"/>
            <span>Trash</span>  
        </button>
    )
}
