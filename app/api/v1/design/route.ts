import { auth } from "@/auth";
import { db } from "@/lib/db";
import { DesignSchema } from "@/schemas/design.schema";
import { NextResponse } from "next/server";

export async function POST (req: Request){
    try {

        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status : 400});
        }

        const body = await req.json();
        const validatedData = await DesignSchema.safeParseAsync(body);

        if (!validatedData.success) {
            return new NextResponse("Invalid design dimensions", {status: 400});
        }

        const { category, height, width } = validatedData.data;

        const project = await db.project.create({
            data : {
                height,
                width,
                type : category,
                userId : session.user.id,
                pages : {
                    create : {
                        position : 1
                    }
                }
            },
            select : {
                id : true
            }
        });

        return NextResponse.json(project);

    } catch (error) {
        console.error("DESIGN POST API ERROR", error);
        return new NextResponse("Internal server error", {status: 500});
    }
}