"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    BrainStormIcon,
    CertificateIcon,
    CustomSizeIcon,
    DocIcon,
    SocialMediaIcon,
    UploadIcon,
    WhiteBoardIcon
} from "@/components/icons/icons";
import { Ellipsis } from "lucide-react";

export const Categories = () => {
    return (
        <div className="py-5 w-full lg:flex lg:items-center lg:justify-center">
            <Carousel>
                <CarouselContent className="">
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#ead4ff] flex items-center justify-center">
                                <CertificateIcon className="h-8 w-8 text-[#992bff] group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] block text-zinc-600 dark:text-zinc-300 font-medium">Certificate</span>
                            <p className="text-xs line-clamp-1 text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">29.7x21 cm</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#f2f3f5] flex items-center justify-center">
                                <BrainStormIcon className="h-8 w-8 text-[#6453d0] group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] block text-zinc-600 dark:text-zinc-300 font-medium">Brainstorm</span>
                            <p className="text-xs truncate text-nowrap text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">1920 x 1080 ..</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#13a3b5] flex items-center justify-center">
                                <DocIcon className="h-8 w-8 text-white group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] block text-zinc-600 dark:text-zinc-300 font-medium">Doc</span>
                            <p className="text-xs truncate text-nowrap text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">Create new</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#0ba84a] flex items-center justify-center">
                                <WhiteBoardIcon className="h-8 w-8 text-white group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] block text-zinc-600 dark:text-zinc-300 font-medium">Whiteboard</span>
                            <p className="text-xs truncate text-nowrap text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">Create new</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#ff3b4b] flex items-center justify-center">
                                <SocialMediaIcon className="h-8 w-8 text-white group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] tracking-tighter block text-zinc-600 dark:text-zinc-300 font-medium">Social Media</span>
                            <p className="text-xs truncate text-nowrap text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">See all</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#f2f3f5] flex items-center justify-center">
                                <CustomSizeIcon className="h-6 w-6 text-black group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] tracking-tighter block text-zinc-600 dark:text-zinc-300 font-medium">Custom Size</span>
                            <p className="text-xs truncate text-nowrap text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">Create new</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#f2f3f5] flex items-center justify-center">
                                <UploadIcon className="h-6 w-6 text-black group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] tracking-tighter block text-zinc-600 dark:text-zinc-300 font-medium">Upload</span>
                            <p className="text-xs truncate text-nowrap text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">Add media</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                            <div className="h-12 mb-1.5 aspect-square rounded-full bg-[#f2f3f5] flex items-center justify-center">
                                <Ellipsis className="h-6 w-6 text-[#6453d0] group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <span className="text-[13px] tracking-tighter block text-zinc-600 dark:text-zinc-300 font-medium">More</span>
                            <p className="text-xs truncate text-nowrap text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">See all</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}
