import { create } from "zustand";

type State = "NAME"|"CODE"|"DEFAULT";

interface UseFormControl {
    control : {
        state : State;
        email: string;
    };
    setControl : (control: State, email?:string)=>void;
}

export const useFormControl = create<UseFormControl>((set)=>({
    control : {
        state : "DEFAULT",
        email : ""
    },
    setControl : (state : State, email?: string)=>set({
        control : {
            state,
            email : email||""
        }
    })
}));