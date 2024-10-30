import { db } from "./db";

export const getUserByEmail = async(email:string)=>{
    try {
        const user = await db.user.findUnique({
            where : {
                email
            }
        });
        return user;
    } catch (error) {
        console.log("USER BY EMAIL CONTROLLER ERROR", error);
        return null;
    }
}