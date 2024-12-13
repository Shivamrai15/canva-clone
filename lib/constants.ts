import {
    CustomSizeIcon,
    DocIcon,
    FacebookIcon,
    InstagramIcon,
    MoreIcon,
    SignagesIcon,
    SocialMediaIcon,
    SparkleIcon,
    TwitterIcon,
    UploadIcon,
    WhatsAppIcon,
    WhiteBoardIcon,
    YoutubeIcon,
} from "@/components/icons/icons";

import { Category, Design, Dimension} from "@/types";
import { Category as Type } from "@prisma/client";



export const MODALSIDEBARITEMS = [
    {
        label : "For you",
        icon : SparkleIcon,
        value : Category.FORYOU,
        color : ""
    },
    {
        label : "Docs",
        icon : DocIcon,
        value : Category.DOCS,
        color : "#13a3b5"
    },
    {
        label : "Whiteboards",
        icon : WhiteBoardIcon,
        value : Category.WHITEBOARD,
        color : "#0ba84a"
    },
    {
        label : "Social Media",
        icon : SocialMediaIcon,
        value : Category.SOCIALMEDIA,
        color : "#ff3b4b"
    },
    {
        label : "Signages",
        icon : SignagesIcon,
        value : Category.SIGNAGES,
        color : "#0d1216"
    },
    {
        label : "Custom Size",
        icon : CustomSizeIcon,
        value : Category.CUSTOM,
        color : ""
    },
    {
        label : "Upload",
        icon : UploadIcon,
        value : Category.UPLOAD,
        color : ""
    },
    {
        label : "More",
        icon : MoreIcon,
        value : Category.MORE,
        color : ""
    },
]


export const Dimensions: Dimension[]  = [
    {
        name : "Certificate",
        height : 21,
        width : 29.7,
        category : Type.CERTIFICATE,
        unit : "cm"
    },
    {
        name : "Brainstorm",
        height : 1080,
        width : 1920,
        category : Type.DOC,
        unit : "px"
    },
    {
        name : "Instagram Post(square)",
        height : 1080,
        width : 1080,
        category : Type.INSTAGRAMPOST,
        unit : "px"
    },
    {
        name : "Logo",
        height : 500,
        width : 500,
        category : Type.LOGO,
        unit : "px"
    },
    {
        name : "Discord Avatar",
        height : 200,
        width : 200,
        category : Type.DISCORDAVATAR,
        unit : "px"
    },
    {
        name : "Resume",
        height : 29.7,
        width : 21,
        category : Type.RESUME,
        unit : "cm"
    },
    {
        name : "YouTube Thumbnail",
        height : 720,
        width : 1280,
        category : Type.YOUTUBETHUMBNAIL,
        unit : "px"
    },
    {
        name : "Invitation (Portrait)",
        height : 7,
        width : 5,
        category : Type.INVITATION,
        unit : "in"
    },
    {
        name : "Facebook Post",
        height : 788,
        width : 940,
        category : Type.FACEBOOKPOST,
        unit : "px"
    },
    {
        name : "Instagram Story",
        height : 1920,
        width : 1080,
        category : Type.INSTAGRAMSTORY,
        unit : "px"
    },
    {
        name : "WhatsApp Status",
        height : 1920,
        width : 1080,
        category : Type.WHATSAPPSTATUS,
        unit : "px"
    },
    {
        name : "Facebook Cover",
        height : 315,
        width : 851,
        category : Type.FACEBOOKCOVER,
        unit : "px"
    },
    {
        name : "YouTube Banner",
        height : 1440,
        width : 2560,
        category : Type.YOUTUBEBANNER,
        unit : "px"
    },
    {
        name : "Twitter Post",
        height : 900,
        width : 1600,
        category : Type.TWITTERPOST,
        unit : "px"
    },
    {
        name : "Postcard",
        height : 105,
        width : 148,
        category : Type.POSTCARD,
        unit : "mm"
    },
    {
        name : "FLYER",
        height : 297,
        width : 210,
        category : Type.FLYER,
        unit : "mm"
    },
];


export const Designs: Design[]  = [
        {
            label : "Instagram Post(square)",
            height : 1080,
            width : 1080,
            category : Type.INSTAGRAMPOST,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : InstagramIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "Facebook Post",
            height : 788,
            width : 940,
            category : Type.FACEBOOKPOST,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : FacebookIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "Instagram Story",
            height : 1920,
            width : 1080,
            category : Type.INSTAGRAMSTORY,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : InstagramIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "WhatsApp Status",
            height : 1920,
            width : 1080,
            category : Type.WHATSAPPSTATUS,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : WhatsAppIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "Facebook Cover",
            height : 315,
            width : 851,
            category : Type.FACEBOOKCOVER,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : FacebookIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "YouTube Thumbnail",
            height : 720,
            width : 1280,
            category : Type.YOUTUBETHUMBNAIL,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : YoutubeIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "YouTube Banner",
            height : 1440,
            width : 2560,
            category : Type.YOUTUBEBANNER,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : YoutubeIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "Twitter Post",
            height : 900,
            width : 1600,
            category : Type.TWITTERPOST,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : TwitterIcon,
            type : Category.SOCIALMEDIA
        },
        {
            label : "Twitter Post",
            height : 900,
            width : 1600,
            category : Type.TWITTERPOST,
            unit : "px",
            bg : "#fee5e6",
            color : "#ff3b4b",
            icon : TwitterIcon,
            type : Category.SOCIALMEDIA
        },
];