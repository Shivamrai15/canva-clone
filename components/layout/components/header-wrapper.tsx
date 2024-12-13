"use client";

import { useRef, useState, RefObject } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeaderWrapper {
    containerRef : RefObject<HTMLDivElement>;
    children : React.ReactNode; 
    className? : string;
}


export const HeaderWrapper = ({
    children,
    containerRef,
    className
}: HeaderWrapper) => {
    
    const { scrollY } = useScroll({ container: containerRef });
    const [shadow, setShadow] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest === 0) {
            setShadow(false);
        } else {
            setShadow(true);
        }
    });

    return (
        <motion.header 
            className={cn(
                "sticky top-0 h-14 w-full z-[40] md:bg-white md:dark:bg-neutral-900 dark:border",
                className
            )}
            initial={{ boxShadow: "none" }}
            animate={{ boxShadow: shadow ? "0px 2px 16px rgba(0, 0, 0, 0.2)" : "none" }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.header>
    )
}
