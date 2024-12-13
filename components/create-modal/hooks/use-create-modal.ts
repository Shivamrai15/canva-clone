import { create } from "zustand";
import { Category } from "@/types";

interface UseCreateModalProps {
    isOpen : boolean
    type : Category
    onOpen : ( type: Category ) => void;
    setType: (type: Category) =>void;
    onClose : ()=>void;
}

export const useCreateModal = create<UseCreateModalProps>((set)=>({
    isOpen : false,
    type : Category.MORE,
    onOpen : ( type: Category )=>set({type, isOpen: true}),
    setType : ( type: Category )=>set({type}),
    onClose : ()=>set({ isOpen: false })
}));