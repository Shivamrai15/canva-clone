"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { UpgradeButton } from "@/components/utils/upgrade-button";
import { CreateDesignButton } from "@/components/utils/create-design-button";
import { TrashButton } from "@/components/utils/trash-button";
import { RecentDesigns } from "@/components/design/recent-design";

export const InstantOptions = () => {
    
    const { theme } = useTheme();

    return (
        <div className="w-full h-full">
            <section
                className="flex flex-col gap-y-3 p-4 py-5"
            >
                <Link
                    href="/"
                    className="h-8 w-20 block relative"
                >
                    <Image
                        src={theme=== "dark"?"./icons/856bac30504ecac8dbd38dbee61de1f1.svg": "./icons/8439b51bb7a19f6e65ce1064bc37c197.svg"}
                        alt="Logo"
                        fill
                        className="object-contain ml-0"
                    />
                </Link>
                <div className="flex flex-col space-y-2">
                    <CreateDesignButton/>
                    <UpgradeButton/>
                </div>
            </section>
            <section className="h-[calc(100%-245px)] w-full">
                <RecentDesigns/>
            </section>
            <div className="p-4 py-3 w-full">
                <TrashButton/>
            </div>
        </div>
    )
}
