"use client";

import { useRef } from "react";
import { Categories } from "@/components/design/components/categories";
import { RecentDesignCards } from "@/components/design/components/recent-design-cards";
import { HeaderWrapper } from "@/components/layout/components/header-wrapper";
import { Poster } from "@/components/layout/components/poster";
import { ModeToggle } from "@/components/layout/components/theme-toggle-button";

const HomePage = () => {
    
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div className="h-full md:p-2">
            <div className="relative h-full md:bg-white md:dark:bg-neutral-900 dark:border md:dark:border-zinc-700 md:rounded-2xl md:overflow-hidden md:shadow-[0px_0px_15px_1px_rgba(0,0,0,0.1)]">
                <div  
                    className="h-full overflow-y-auto overflow-x-hidden"
                    ref={ref}
                >
                    <HeaderWrapper
                        containerRef={ref}
                    >
                        <div></div>
                    </HeaderWrapper>
                    <main className="w-full">
                        <div className="w-full bg-gradient-to-b from-transparent to-white dark:to-neutral-900">
                            <Poster/>
                        </div>
                        <section className="w-full bg-white dark:bg-neutral-900">
                            <Categories/>
                            <RecentDesignCards/>
                            <ModeToggle/>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default HomePage;