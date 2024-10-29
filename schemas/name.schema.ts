import * as z from "zod";

export const NameSchema = z.object({
    name : z.string().min(1, {
        message : "You missed this one"
    }),
    email : z.string().email()
});