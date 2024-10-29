"use server";
import bcrypt from "bcryptjs";
import { getTokenByEmail } from "@/lib/tokens";

export const login = async(email: string, code: string)=>{
    try {
        
        const token = await getTokenByEmail(email, code);
        if (!token) {
            return {
                message : "Token does not exist",
                status : true
            }
        }

        const hasExpired = new Date(token.expires) < new Date();
        if (hasExpired) {
            return {
                message : "The code you entered is expired.",
                status : false
            }
        }

        const isCorrectCode = await bcrypt.compare(code, token.code)
        if (!isCorrectCode) {
            return {
                message : "The code you entered is incorrect.",
                status : false
            }
        } 

        return {
            message : "Code verified successfully",
            status : true
        }

    } catch (error) {
        console.log("LOGIN ERROR", error);
        return {
            message : "Internal server error",
            status : false 
        }
    }
}