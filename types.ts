import { Page, Project, Category as Type } from "@prisma/client";

export enum Category {
    MORE,
    DOCS,
    WHITEBOARD,
    SOCIALMEDIA,
    SIGNAGES,
    CUSTOM,
    UPLOAD,
    FORYOU
}

export type Unit = "px"|"mm"|"in"|"cm";

export type Dimension = {
    name : string;
    height : number;
    width : number;
    unit: Unit;
    category: Type
}

export type Icon = {
    className? : string;
    style?: React.CSSProperties;
}

export type Design = {
    label: string;
    height: number;
    width: number;
    category: Type;
    unit: Unit;
    bg: string;
    color: string;
    icon: ({ className, style }: Icon ) => JSX.Element;
    type: Category;
}

export type ProjectResponse = Project & { pages : Page[] }