"use client";

import { Design } from "@/types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface CategoryCarouselProps {
    designs : Design[]
}

export const CategoryCarousel = ({
    designs
}: CategoryCarouselProps ) => {

    return (
        <div className="w-full">
            <Carousel>
                <CarouselContent>
                    {
                        designs.map(({icon : Icon, ...item})=>(
                            <CarouselItem className="basis-auto">
                                <div className="w-20 flex flex-col gap-y-0.5 items-center justify-center group cursor-default md:cursor-pointer">
                                    <div 
                                        className="h-12 mb-1.5 aspect-square rounded-full flex items-center justify-center"
                                        style={{background: item.bg}}
                                    >
                                        <Icon 
                                            className="h-8 w-8 group-hover:scale-110 transition-all duration-300"
                                            style={{color: item.color}}
                                        />
                                    </div>
                                    <span className="text-[13px] block text-zinc-600 dark:text-zinc-300 font-medium text-center line-clamp-2">{item.label}</span>
                                    <p className="text-xs line-clamp-1 text-zinc-500 dark:text-zinc-400 font-medium opacity-0 group-hover:opacity-100">
                                        <span>{item.width}x{item.height} </span>
                                        <span>{item.unit}</span>
                                    </p>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}
