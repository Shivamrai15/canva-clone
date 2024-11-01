"use client";

import Image from "next/image";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { UpgradeInfo } from "@/components/layout/upgrade-info";
import { useModal } from "@/hooks/use-modal";
  


export const UpgradeModal = () => {
    
    const { isOpen, onClose } = useModal();

    const onOpenChange = (open: boolean) => {
        if(!open) {
            onClose();
        }
    }
    
    return (
        <Dialog
            open={isOpen==="UPGRADE"}
            onOpenChange={onOpenChange}
        >
            <DialogContent
                className="bg-transparent max-w-5xl w-full px-10 border-none shadow-none"
            >
                <div className="h-[36rem] w-full rounded-xl flex bg-gradient-to-r from-[#00c4cc] from-[2.94%] via-[#5a32fa] via-[51.94%] to-[#7d2ae8]">
                    <div className="w-96  my-6 ml-6">
                        <div className="h-full w-full bg-white dark:bg-neutral-800 rounded-2xl p-6">
                            <UpgradeInfo/>
                        </div>
                    </div>
                    <div className="w-3/5 h-full relative">
                        <Image
                            src="/assets/droptober_upsell_dialog_illustration.webp"
                            fill
                            alt=""
                            className="object-cover"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}