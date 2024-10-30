"use server";

import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { getTokenByEmail } from "@/lib/tokens";
import { AuthError } from "next-auth";

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

        await signIn("credentials", {email});

        return {
            message : "Logged In Successfully",
            status : true
        }

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { message: "Invalid credentials!", status : false }
                default:
                    return { message: "Internal server error", status : true }
            }
        }
      
        throw error;
    }
}