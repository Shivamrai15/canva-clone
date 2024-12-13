import { Unit } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Dimensions } from "./constants"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getDimensions = ( height: number, width: number, unit: Unit ) => {
    const suggestedDimensions = Dimensions.filter((dimension)=>(dimension.unit===unit && dimension.height===height && dimension.width===width ));
    return suggestedDimensions;
}


export const convertToPixel = ({ height, width, unit }:{height: number, width: number, unit: Unit}) => {
    switch (unit) {
        case "px":
            return { height, width };
        case "cm":
            return {
                height: height * 37.7952755906,
                width: width * 37.7952755906,
            };
        case "mm":
            return {
                height: height * 3.77952755906,
                width: width * 3.77952755906,
            };
        case "in":
            return {
                height: height * 96,
                width: width * 96,
            };
        default:
            throw new Error("Unsupported unit type");
    }
};