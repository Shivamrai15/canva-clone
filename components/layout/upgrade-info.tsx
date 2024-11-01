"use client";

import { 
    SparkleIcon,
    TemplateIcon
} from "@/components/icons/icons";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UpgradeInfo = () => {
  return (
    <div className="w-full space-y-5 relative overflow-y-auto">
        <h1 className="text-zinc-800 dark:text-zinc-100 font-[600] text-xl md:text-2xl tracking-tighter">
            Upgrade to Canva Pro
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 leading-tight tracking-tighter text-[15px]">
            Canva Pro has all the tools you need to design graphics for any project.
        </p>
        <div className="space-y-3">
            <div className="flex items-start gap-x-3">
                <SparkleIcon className="h-6 w-6 shrink-0" />
                <p className="text-zinc-600 dark:text-zinc-300 leading-tight tracking-tighter text-[15px]">
                    <span>Elevate creativity with our latest AI tools, like </span>
                    <strong className="font-[600] text-zinc-700 dark:text-zinc-100">Dream Lab</strong>
                </p>
            </div>
                <div className="flex items-start gap-x-3">
                    <TemplateIcon className="h-6 w-6 shrink-0" />
                    <p className="text-zinc-600 dark:text-zinc-300 leading-tight tracking-tighter text-[15px]">
                        <span>Get unlimited access to </span>
                        <strong className="font-[600] text-zinc-700 dark:text-zinc-100">
                        all 100 million+ photos, videos, fonts, and templates
                        </strong>
                    </p>
                </div>
                <div className="flex items-start gap-x-3">
                    <Palette className="h-5 w-5 shrink-0 ml-0.5 mr-0.5" />
                    <p className="text-zinc-600 dark:text-zinc-300 leading-tight tracking-tighter text-[15px]">
                        <span>Boost productivity with </span>
                        <strong className="font-[600] text-zinc-700 dark:text-zinc-100">
                            Background Remover
                        </strong>
                        <span>, </span>
                        <strong className="font-[600] text-zinc-700 dark:text-zinc-100">Brand Kit</strong>
                        <span>, and </span>
                        <strong className="font-[600] text-zinc-700 dark:text-zinc-100">
                            1 TB of storage
                        </strong>
                    </p>
                </div>
            </div>
            <div className="sticky bottom-0 py-2">
                <Button
                    variant="original"
                    className="rounded-lg w-full text-white font-semibold"
                >
                    Upgrade
                </Button>
            </div>
    </div>
  );
};
