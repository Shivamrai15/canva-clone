import { convertToPixel } from "@/lib/utils";
import { Unit } from "@/types";
import { Category } from "@prisma/client";
import axios from "axios";

interface CreateDesignAgrs {
    height : number;
    width : number;
    unit : Unit;
    category : Category
}

export const createDesgin = async(args : CreateDesignAgrs)=> {
    try {        
        const { height, width } = convertToPixel(args);
        const response = await axios.post("/api/v1/design", { height, width, category: args.category });
        const data = response.data;
        return `/design/${data.id}`;

    } catch (error) {
        throw error;
    }
}