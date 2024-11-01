"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

interface CreateDesignButtonProps {
    className?: string;
}

export const CreateDesignButton = ({
    className
}: CreateDesignButtonProps) => {
    
    return (
        <Button
            variant="original"
            className={cn(
                "h-10 w-full text-white font-semibold rounded-lg",
                className
            )}
        >
            <PlusIcon className="h-8 w-8 block"/>
            <span>Create a design</span>
        </Button>
    )
}
