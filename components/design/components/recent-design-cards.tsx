"use client";

import Image from "next/image";
import { useState } from "react";

import { FaListUl } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import { useCreateModal } from "@/components/create-modal/hooks/use-create-modal";
import { Category } from "@/types";


export const RecentDesignCards = () => {
    
    const items = [];
    const [style, setStyle] = useState(true);
    const { onOpen } = useCreateModal();

    return (
        <section className="w-full p-6">
            {
                !!items.length ? (
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl md:text-[28px] text-zinc-800 dark:text-zinc-200 font-medium tracking-tighter" >Recent designs</h1>
                            <Button
                                variant="outline"
                                size="icon"
                                className="dark:bg-transparent rounded-lg"
                                onClick={()=>setStyle((prev)=>!prev)}
                            >
                                {style ? <FaListUl/> : <LayoutGrid/>}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="w-full space-y-6 pb-36">
                        <div className="max-w-sm w-full aspect-[18/13] mx-auto relative">
                            <Image
                                src="/assets/d7b0d443e9ec9ae911c209b7de569b67.webp"
                                fill
                                alt=""
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2 flex flex-col items-center justify-center">
                            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">Possibilities await</h2>
                            <div className="text-[15px] tracking-tighter">
                                <span className="text-zinc-800 dark:text-zinc-400 mr-1 select-none">Get started by</span>
                                <span onClick={()=>onOpen(Category.FORYOU)} className="text-violet-500 dark:text-violet-400 underline select-none md:cursor-pointer">creating a design</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}
