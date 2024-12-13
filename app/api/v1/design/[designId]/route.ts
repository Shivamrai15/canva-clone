import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET (
    req: Request,
    { params } : { params : { designId: string } }
) {
    try {

        const session = await auth();
        if (!session || !session.user || !session.user.id) {
            return new NextResponse("Unauthorized", {status: 400});
        }

        const project = await db.project.findUnique({
            where : {
                userId : session.user.id,
                id: params.designId
            },
            include : {
                pages : true
            }
        });

        if (!project) {
            return new NextResponse("Design not found", {status: 404});
        }

        return NextResponse.json(project);
        
    } catch (error) {
        console.log("DESIGN GET API ERROR", error);
        return new NextResponse("Internal server error", {status: 500});
    }
}