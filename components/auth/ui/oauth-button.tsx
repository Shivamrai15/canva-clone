"use clinet";

import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface OauthButtonProps {
    title: string;
    onClick: ()=>void;
    icon: IconType;
    disabled: boolean
}

export const OauthButton = ({
    icon : Icon,
    disabled,
    onClick,
    title
}: OauthButtonProps) => {
    
    return (
        <Button
            className="w-full hover:bg-neutral-700/30 h-auto border border-neutral-600 rounded-lg hover:text-white relative"
            variant="ghost"
            onClick={onClick}
            disabled={disabled}
        >
            <Icon className="h-8 w-8 absolute left-3 block"/>
            <div className="font-semibold">{title}</div>
        </Button>
    )
}
