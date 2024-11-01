import { create } from "zustand";

type Modal = "UPGRADE"|"CREATE"|undefined;

interface UseModalProps {
    isOpen : Modal;
    onOpen : ( name: Modal )=>void;
    onClose : ()=>void;
}

export const useModal = create<UseModalProps>((set)=>({
    isOpen : undefined,
    onOpen : ( name: Modal )=>set({isOpen: name}),
    onClose : ()=>set({isOpen : undefined})
}));
