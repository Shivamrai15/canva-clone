"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { Topbar } from "./topbar";
import { CategoryCarousel } from "./category-carousel";
import { Designs } from "@/lib/constants";
import { Category } from "@/types";

export const SocialMedia = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ container: containerRef });
    const [shadow, setShadow] = useState(false);

    const socialDesigns = Designs.filter((design)=>design.type===Category.SOCIALMEDIA);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest === 0) {
            setShadow(false);
        } else {
            setShadow(true);
        }
    });

    return (
        <div className="h-full w-full">
            <motion.div 
                className="h-24 w-full z-40"
                initial={{ boxShadow: "none" }}
                animate={{ boxShadow: shadow ? "6px 6px 10px -2px rgba(0, 0, 0, 0.2)" : "none" }}
                transition={{ duration: 0.3 }}
            >
                <Topbar/>
            </motion.div>
            <div 
                className="h-full overflow-y-auto px-6"
                ref={containerRef}
            >
                <div className="max-w-[700px] w-full">
                    <CategoryCarousel designs={socialDesigns} />
                </div>
            </div>
        </div>
    );
}