import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateToken } from "@/lib/tokens";
import { EmailSchema } from "@/schemas/email.schema";
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
            },
        });

        if (!user) {
            return new NextResponse("Account does't exist", {status: 404});
        }

        const code = await generateToken(user.email);
        if (!code) {
            return new NextResponse("Error while generating verification code", {status: 400});
        }
        await sendVerificationEmail(user.email, code, user.name||"");

        return NextResponse.json(user);

    } catch (error) {
        console.error("VERIFICATION CODE POST API ERROR", error);
        return new NextResponse("Internal server error", {status: 500});
    }
}