"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaCrown } from "react-icons/fa";

interface UpgradeButtonProps {
    className?: string
}

export const UpgradeButton = ({
    className
}: UpgradeButtonProps) => {
    
    return (
        <Button
            className={cn(
                "h-10 w-full font-semibold text-zinc-800 bg-white hover:bg-white dark:bg-white/80 rounded-lg",
                className
            )}
        >
            <FaCrown className="text-yellow-400" size={10}/>
            <span>Upgrade to Canva Pro</span>
        </Button>
    )
}
