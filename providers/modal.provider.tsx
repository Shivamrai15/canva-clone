"use client";

import { CreateDesignModal } from "@/components/modals/create-design.modal";
import { UpgradeModal } from "@/components/modals/upgrade.modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    
    const [ isMounted, setIsMounted ] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    }, []);
    
    if (!isMounted) {
        return null;
    }
    
    return (
        <>
            <UpgradeModal/>
            <CreateDesignModal/>
        </>
    )
}
