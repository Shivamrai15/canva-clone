"use client";

import React, { useEffect, useState } from "react";
 
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PosterProps {
    className?: string;
}

export const Poster = ({
    className
}: PosterProps) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const [rect, setRect] = useState<DOMRect | null>(null);
    const [isInside, setIsInside] = useState<boolean>(false);

    useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, []);
     
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            x.set(e.clientX - rect.left + scrollX);
            y.set(e.clientY - rect.top + scrollY);
        }
    };
    const handleMouseLeave = () => {
        setIsInside(false);
    };
     
    const handleMouseEnter = () => {
        setIsInside(true);
    };
    
    return (
        <div 
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            style={{cursor: "none"}}
            ref={ref}
            className={cn(
                "bg-gradient-to-r from-rose-300 via-red-500 to-red-600 mx-6 p-6 py-3 md:py-6 rounded-xl relative",
                className
            )}
        >
            <div className="h-full flex flex-col items-center justify-center gap-y-6">
                <div className="text-4xl md:text-7xl -tracking-[3px] md:-tracking-[6px] text-white text-center flex items-center flex-wrap justify-center gap-x-4">
                    <div className="text-center">Discover</div>
                    <div className="relative">
                        <span>Droptopber</span>
                        <div className="h-12 w-12 md:h-24 md:w-24 absolute left-5 top-0 md:left-10 md:-top-2">
                            <div className="h-full w-full relative flex items-center justify-center">
                                <Image
                                    src="/assets/chat-love-emoji.svg"
                                    fill
                                    alt=""
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    onMouseEnter={()=>setIsInside(false)}
                    onMouseLeave={()=>setIsInside(true)}
                    className="bg-white/80 hover:bg-white text-zinc-800 font-[600]"
                >
                    See what's new in social
                </Button>
            </div>
            <AnimatePresence>
                {isInside && <FollowPointer x={x} y={y} title="You" />}
            </AnimatePresence>
        </div>
    )
}


export const FollowPointer = ({
    x,
    y,
    title,
}: {
    x: any;
    y: any;
    title?: string | React.ReactNode;
}) => {
    return (
        <motion.div
            className="h-4 w-4 rounded-full absolute z-30 hidden md:block"
            style={{
                top: y,
                left: x,
                pointerEvents: "none",
            }}
            initial={{
                scale: 1,
                opacity: 1,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            exit={{
                scale: 0,
                opacity: 0,
            }}
        >
            <div className="relative">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 16 16"
                    className="h-5 w-6 text-red-500 transform -rotate-[90deg] -translate-x-[20px]  stroke-white z-50"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
                </svg>
                <div className="h-64 w-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent rounded-full -left-[8.5rem] -top-[7.5rem] absolute -z-10">

                </div>
            </div>
            <motion.div
                initial={{
                    scale: 0.5,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                exit={{
                    scale: 0.5,
                    opacity: 0,
                }}
                className={
                    "px-2 py-1 bg-red-500/90 border ring-1 ring-zinc-600/80 border-white rounded-lg text-white whitespace-nowrap min-w-max text-xs shadow-lg z-50"
                }
            >
                {title}
            </motion.div>
        </motion.div>
    );
};
