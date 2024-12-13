"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";


import {
    ActiveBrandIcon,
    ActiveHomeIcon,
    ActiveProjectsIcon,
    ActiveTemplateIcon,
    BrandIcon,
    HomeIcon,
    ProjectsIcon,
    TemplateIcon
} from "@/components/icons/icons";
import { cn } from "@/lib/utils";

export const Sidebar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const routes = useMemo(()=>[
        {
            label: "Home",
            url: "/",
            icon: HomeIcon,
            activeIcon: ActiveHomeIcon,
            isActive: pathname === "/",
            isPremium: false
        },
        {
            label: "Projects",
            url: "/projects",
            icon: ProjectsIcon,
            activeIcon: ActiveProjectsIcon,
            isActive: pathname === "/projects",
            isPremium: false
        },
        {
            label: "Templates",
            url: "/templates",
            icon: TemplateIcon,
            activeIcon: ActiveTemplateIcon,
            isActive: pathname === "/templates",
            isPremium: false 
        },
        {
            label: "Brand",
            url: "/brand",
            icon: BrandIcon,
            activeIcon: ActiveBrandIcon,
            isActive: pathname === "/brand",
            isPremium: true 
        }
    ], [pathname]);
    
    return (
        <div className="h-full w-full flex flex-col gap-y-6 items-center px-1 py-4">
            {
                routes.map(({ icon: Icon, activeIcon: ActiveIcon, ...route })=>(
                    <div
                        key={route.label}
                        className="w-full space-y-0.5 cursor-pointer"
                        onClick={()=>router.push(route.url)}
                    >
                        <div className="px-2 w-full">
                            <div className={cn(
                                "w-full aspect-square flex items-center justify-center hover:bg-[#7731d81a] dark:hover:bg-[#ffffff1f] rounded-lg text-[#4a2e7fcc] dark:text-[#ffffffcc]",
                                route.isActive && "bg-[#7731d81a] dark:bg-[#ffffff1f] text-[#7731d8] dark:text-white"
                            )}>
                                {
                                    route.isActive ? <ActiveIcon className="h-8 w-8"/> : <Icon className="h-8 w-8"/>
                                }
                            </div>
                        </div>
                        <p className={cn(
                            "text-[11px] text-center text-[#4a2e7fcc] font-medium dark:text-[#ffffffcc]",
                            route.isActive && "text-[#7731d8] dark:text-white"
                        )}>
                            {route.label}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}