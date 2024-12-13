import * as z from "zod";

const Category = z.enum([
    "CERTIFICATE",
    "DOC",
    "WHITEBOARD",
    "BRAINSTORM",
    "INSTAGRAMPOST",
    "LOGO",
    "POSTER",
    "DISCORDAVATAR",
    "RESUME",
    "YOUTUBETHUMBNAIL",
    "INVITATION",
    "CUSTOM",
    "FACEBOOKPOST",
    "INSTAGRAMSTORY",
    "WHATSAPPSTATUS",
    "FACEBOOKCOVER",
    "YOUTUBEBANNER",
    "TWITTERPOST",
    "POSTCARD",
    "FLYER",
    "MENU"
]);

export const DesignSchema = z.object({
    height : z.number().min(40).max(8000),
    width : z.number().min(40).max(8000),
    category : Category
});

