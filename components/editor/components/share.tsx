import { Separator } from "@/components/ui/separator"
import { CollaborationForm } from "../forms/collaboration.form"
import { ArrowDownToLine } from "lucide-react";
import { BsLink } from "react-icons/bs";
import { PiShareFat } from "react-icons/pi";
import { TemplateIcon } from "@/components/icons/icons";

  

export const Share = () => {
    
    return (
        <div className='w-full space-y-3'>
            <h1 className='text-lg tracking-tight font-semibold text-zinc-700 dark:text-zinc-100 select-none'>Share this design</h1>
            <CollaborationForm/>
            <div>
                <Separator/>
                <div className="grid grid-cols-4 gap-3 mt-6">
                    <div className="w-full space-y-2">
                        <div className="px-3 w-full">
                            <div className="shrink-0 aspect-square rounded-full border border-zinc-300 hover:bg-neutral-100/90 transition-all flex items-center justify-center md:cursor-pointer">
                                <ArrowDownToLine className="h-6 w-6"/>
                            </div>
                        </div>
                        <span className="text-[13px] text-zinc-600 block text-center tracking-tight select-none">
                            Download
                        </span>
                    </div>
                    <div className="w-full space-y-2">
                        <div className="px-3 w-full">
                            <div className="shrink-0 aspect-square rounded-full border border-zinc-300 hover:bg-neutral-100/90 transition-all flex items-center justify-center md:cursor-pointer">
                                <BsLink className="h-6 w-6"/>
                            </div>
                        </div>
                        <span className="text-[13px] text-zinc-600 block text-center tracking-tight select-none">
                            Public view link
                        </span>
                    </div>
                    <div className="w-full space-y-2">
                        <div className="px-3 w-full">
                            <div className="shrink-0 aspect-square rounded-full border border-zinc-300 hover:bg-neutral-100/90 transition-all flex items-center justify-center md:cursor-pointer">
                                <PiShareFat className="h-6 w-6"/>
                            </div>
                        </div>
                        <span className="text-[13px] text-zinc-600 block text-center tracking-tight select-none">
                            Share
                        </span>
                    </div>
                    <div className="w-full space-y-2">
                        <div className="px-3 w-full">
                            <div className="shrink-0 aspect-square rounded-full border border-zinc-300 hover:bg-neutral-100/90 transition-all flex items-center justify-center md:cursor-pointer">
                                <TemplateIcon className="h-8 w-8"/>
                            </div>
                        </div>
                        <span className="text-[13px] text-zinc-600 block text-center tracking-tight select-none">
                            Share
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
