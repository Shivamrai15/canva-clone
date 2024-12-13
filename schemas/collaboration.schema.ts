import * as z from "zod";

export const CollaborationSchema = z.object({
    isPrivate : z.boolean().default(false),
    isPublicEditable : z.boolean().default(false)
})