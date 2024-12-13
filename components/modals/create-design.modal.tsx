"use client";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { CreateModalSidebar } from "@/components/create-modal/components/create-modal.sidebar";
import { useCreateModal } from "@/components/create-modal/hooks/use-create-modal";
import { DesignCategories } from "../create-modal/components/design-categories";

export const CreateDesignModal = () => {
    
    const { isOpen, onClose } = useCreateModal();
    const onOpenChange = (open: boolean)=>{
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onOpenChange}
        >
            <DialogContent
                className="bg-transparent max-w-6xl w-full px-10 border-none shadow-none"
            >
                <div className="w-full h-[36rem] bg-white dark:bg-[#252627] dark:border dark:border-zinc-700 rounded-2xl flex overflow-hidden">
                    <div className="max-w-[30%] w-full min-w-60 shrink p-6">
                        <CreateModalSidebar/>
                    </div>
                    <div className="h-full w-full">
                        <DesignCategories/>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
