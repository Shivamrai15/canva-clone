import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

import { EmailSchema } from "@/schemas/email.schema";
import { getUserByEmail } from "@/lib/user";


export default {
    providers : [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials){
                const validatedFields = await EmailSchema.safeParseAsync(credentials);
                if (validatedFields.success){
                    const {email} = validatedFields.data;
                    const user = await getUserByEmail(email);
                    return user;
                }
                return null;
            }
        })
    ]
} satisfies NextAuthConfig;