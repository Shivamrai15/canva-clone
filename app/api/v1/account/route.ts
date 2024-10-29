import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateToken } from "@/lib/tokens";
import { EmailSchema } from "@/schemas/email.schema";
import { NameSchema } from "@/schemas/name.schema";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
    try {
        
        const body = await req.json();
        const validatedData = await EmailSchema.safeParseAsync(body);

        if (!validatedData.success) {
            return new NextResponse("Invalid email", {status: 400});
        }

        const user = await db.user.findUnique({
            where : {
                email : validatedData.data.email,
                accounts : {
                    none : {}
                }
            }
        });

        if (user) {
            if ( user.name ) {
                const code = await generateToken(user.email);
                if (!code) {
                    return new NextResponse("Error while generating verification code", {status: 400});
                }
                await sendVerificationEmail(user.email, code, user.name);
            }
            return NextResponse.json(user);
        }

        const newUser = await db.user.create({
            data : {
                email : validatedData.data.email
            }
        });

        return NextResponse.json(newUser);

    } catch (error) {
        console.error("ACCOUNT POST API ERROR", error);
        return new NextResponse("Internal server error", {status: 500});
    }
}


export async function PATCH (req: Request) {
    try {
        
        const body = await req.json();
        const validatedData = await NameSchema.safeParseAsync(body);

        if (!validatedData.success) {
            return new NextResponse("Name required", {status: 400});
        }

        const { email, name } = validatedData.data;

        const user = await db.user.update({
            where : {
                email
            },
            data : {
                name
            }
        });

        if (!user) {
            return new NextResponse("Account does't exist ", {status: 404});
        }

        const code = await generateToken(user.email);
        if (!code) {
            return new NextResponse("Error while generating verification code", {status: 400});
        }
        await sendVerificationEmail(user.email, code, name);

        return NextResponse.json(user);

    } catch (error) {
        console.error("ACCOUNT PATCH API ERROR", error);
        return new NextResponse("Internal server error", {status: 500});
    }
}