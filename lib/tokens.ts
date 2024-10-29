import bcrypt from "bcryptjs";
import crypto from "crypto";
import { db } from "./db";

export const generateToken = async(email: string)=>{
    try {
        
        const code = crypto.randomInt(100_000, 1_000_000).toString();
        const hashedCode = await bcrypt.hash(code, 10);
        const expires = new Date(new Date().getTime() + 5*60*1000);

        const existedToken = await db.verificationCode.findUnique({
            where : {
                email
            }
        });

        if (existedToken) {
            await db.verificationCode.delete({
                where : {
                    id : existedToken.id
                }
            });
        }

        await db.verificationCode.create({
            data : {
                email,
                code: hashedCode,
                expires
            }
        });

        return code;

    } catch (error) {
        console.error("GENERATE TOKEN ERROR", error);
        return null;
    }
}


export const getTokenByEmail = async(email: string, code: string)=>{
    try {

        const token = await db.verificationCode.findUnique({
            where : {
                email
            }
        });

        return token;
        
    } catch (error) {
        console.error("TOKEN VERIFICATION ERROR", error);
        return null;
    }
}

