"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
    ActiveHomeIcon,
    ActiveProIcon,
    ActiveProjectsIcon,
    ActiveTemplateIcon,
    HomeIcon,
    ProIcon,
    ProjectsIcon,
    TemplateIcon
} from "@/components/icons/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const BottomBar = () => {
    
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
            label: "Pro",
            url: "/pro-features",
            icon: ProIcon,
            activeIcon: ActiveProIcon,
            isActive: pathname === "/pro-features",
            isPremium: true 
        }
    ], [pathname]);


    return (
        <div className="w-full h-full grid grid-cols-5">
            {
                routes.slice(0, 2).map(({ icon: Icon, activeIcon: ActiveIcon, ...route })=>(
                    <div
                        key={route.label}
                        className="flex flex-col items-center justify-center cursor-default"
                        onClick={()=>router.push(route.url)}
                    >
                        <div
                            className={cn(
                                "text-[#4a2e7fcc] dark:text-[#ffffffcc]",
                                route.isActive && "text-[#7731d8] dark:text-white"
                            )}
                        >
                            {
                                route.isActive ? <ActiveIcon className="h-6 w-6"/> : <Icon className="h-7 w-7"/>
                            }
                        </div>
                        <p className={cn(
                                "text-[11px] font-[600] text-[#4a2e7fcc] dark:text-[#ffffffcc]",
                                route.isActive && "text-[#7731d8] dark:text-white"
                            )}
                        >
                            {route.label}
                        </p>
                    </div>
                ))
            }
            <div className="flex items-center justify-center h-full w-full">
                <div className="h-10 w-10 flex items-center justify-center rounded-full shadow-lg bg-[#8b3dff] hover:bg-[#612dae]">

                    <PlusIcon className="h-6 w-6 text-white"/>
                </div>
            </div>
            {
                routes.slice(2).map(({ icon: Icon, activeIcon: ActiveIcon, ...route })=>(
                    <div
                        key={route.label}
                        className="flex flex-col items-center justify-center cursor-default"
                        onClick={()=>router.push(route.url)}
                    >
                        <div
                            className={cn(
                                "text-[#4a2e7fcc] dark:text-[#ffffffcc]",
                                route.isActive && "text-[#7731d8] dark:text-white"
                            )}
                        >
                            {
                                route.isActive ? <ActiveIcon className="h-6 w-6"/> : <Icon className="h-7 w-7"/>
                            }
                        </div>
                        <p className={cn(
                                "text-[11px] font-[600] text-[#4a2e7fcc] dark:text-[#ffffffcc]",
                                route.isActive && "text-[#7731d8] dark:text-white"
                            )}
                        >
                            {route.label}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
