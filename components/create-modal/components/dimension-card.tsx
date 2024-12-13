"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { Dimension } from "@/types";
import { ImageIcon } from "@/components/icons/icons";
import { createDesgin } from "@/actions/design";
import { cn } from "@/lib/utils";
import { useCreateModal } from "@/components/create-modal/hooks/use-create-modal";


interface DimensionCardProps {
    dimension : Dimension;
    disabled : boolean;
    setLoading : (value: boolean)=>void;
    className? : string
}

export const DimensionCard = ({
    dimension,
    disabled,
    setLoading,
    className
}: DimensionCardProps) => {


    const router = useRouter();
    const { onClose } = useCreateModal();

    const onCreateDesign = async() => {
        try {
            
            setLoading(true);
            const href = await createDesgin({...dimension});
            router.push(href);
            onClose();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        } finally {
            setLoading(false);
        }
    }

    
    return (
        <button 
            className={cn(
                "w-full h-16 border border-zinc-300 rounded-xl hover:bg-neutral-100 dark:border-zinc-600 dark:hover:bg-neutral-700/60 transition-all md:cursor-pointer px-4",
                className
            )}
            disabled={disabled}
            onClick={onCreateDesign}
            type="button"
        >
            <div className="w-full h-full flex items-center gap-x-3">
                <ImageIcon
                    className="h-6 w-6 shrink-0"
                />
                <div className="line-clamp-1">
                    <span className="text-[15px] text-zinc-700 dark:text-zinc-300">{dimension.name} </span>
                    <span className="text-[13px] text-zinc-600 dark:text-zinc-400">
                        {dimension.width} x {dimension.height} {dimension.unit}
                    </span>
                </div>
            
            </div>
        </button>
    )
}
