"use client";

import { useCreateModal } from "@/components/create-modal/hooks/use-create-modal";
import { Category } from "@/types";
import { CustomForm } from "./custom.form";
import { SocialMedia } from "./social-media";


export const DesignCategories = () => {
    
    const { type } = useCreateModal();

    switch ( type ) {
        case Category.CUSTOM :
            return (<CustomForm/>);

        case Category.SOCIALMEDIA :
            return (<SocialMedia/>);

        default : 
            return null;
    }
}
