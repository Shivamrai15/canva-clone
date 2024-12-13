"use client";

import { cn } from "@/lib/utils";
import { useCreateModal } from "@/components/create-modal/hooks/use-create-modal";
import { MODALSIDEBARITEMS } from "@/lib/constants";

export const CreateModalSidebar = () => {
    
    const items = MODALSIDEBARITEMS;
    const { type, setType } = useCreateModal();

    return (
        <aside className="space-y-6 w-full">
            <h1 className="text-xl md:text-[24px] text-zinc-800 font-[600] dark:text-zinc-200 tracking-tight" >Create a designs</h1>
            <ul className="w-full flex flex-col gap-y-1">
                {
                    items.map(({ icon: Icon, ...item })=>(
                        <li 
                            className={cn(
                                "w-full flex h-10 items-center px-3 rounded-lg hover:bg-[#0d1216]/5 dark:hover:bg-neutral-500/30 cursor-pointer gap-x-3 transition-all duration-300",
                                type === item.value && "bg-[#a570ff]/15 hover:bg-[#a570ff]/15 dark:bg-[#a570ff]/30 dark:hover:bg-[#a570ff]/30"
                            )}
                            onClick={()=>setType(item.value)}
                        >
                            <Icon 
                                style={{color: item.color}}
                                className={cn(
                                    "h-8 w-8 scale-75 transition-all duration-300",
                                    type === item.value && !item.color && "text-[#612dae] dark:text-white"
                                )}
                            />
                            <span
                                className={cn(
                                    "tracking-tight text-[15px] transition-all duration-300",
                                    type === item.value && "text-[#612dae] dark:text-white"
                                )}
                            >
                                {item.label}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}
