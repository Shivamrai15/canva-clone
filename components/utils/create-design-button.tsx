"use client";

import { Button } from "@/components/ui/button";
import { useCreateModal } from "@/components/create-modal/hooks/use-create-modal";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { PlusIcon } from "lucide-react";

interface CreateDesignButtonProps {
    className?: string;
}

export const CreateDesignButton = ({
    className
}: CreateDesignButtonProps) => {

    const { onOpen } = useCreateModal();
    
    return (
        <Button
            variant="original"
            className={cn(
                "h-10 w-full text-white font-semibold rounded-lg",
                className
            )}
            onClick={()=>onOpen(Category.MORE)}
        >
            <PlusIcon className="h-6 w-6 block"/>
            <span>Create a design</span>
        </Button>
    )
}
