"use client";

import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn, getDimensions } from "@/lib/utils";
import { Dimensions } from "@/lib/constants";
import { DimensionCard } from "./dimension-card";
import { createDesgin } from "@/actions/design";
import { toast } from "sonner";
import { Category } from "@prisma/client";
import { useCreateModal } from "@/components/create-modal/hooks/use-create-modal";

const unit = z.enum(["in", "px", "mm", "cm"])

const formSchema = z.object({
    height: z.preprocess((val) => (typeof val === "string" ? parseFloat(val) : val), z.number()),
    width: z.preprocess((val) => (typeof val === "string" ? parseFloat(val) : val), z.number()),
    unit: unit,
}).refine((data) => {
    const { height, width, unit } = data;
    const ranges = {
        px: { min: 40, max: 8000 },
        in: { min: 0.417, max: 83.328 },
        mm: { min: 10.583, max: 2116.664 },
        cm: { min: 1.058, max: 211.664 },
    };
    const range = ranges[unit];
    const isHeightValid = height >= range.min && height <= range.max;
    const isWidthValid = width >= range.min && width <= range.max;

    return isHeightValid && isWidthValid;
}, {
    message: "Dimensions are out of the allowed range for the selected unit.",
    path: ["height", "width"],
});



export const CustomForm = () => {
    
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const { onClose } = useCreateModal();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            unit : "px"
        }
    });

    const {isSubmitting, isValid} = form.formState;

    const onCreateDesign = async(values: z.infer<typeof formSchema>) => {
        try {
            
            setLoading(true);
            const href = await createDesgin({...values, category : Category.CUSTOM });
            router.push(href);
            onClose();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="w-full">
            <div className="h-20 flex items-center">
                <h1 className="text-lg font-[600] text-zinc-800 dark:text-zinc-200">Custom size</h1>
            </div>
            <div className="py-4 pr-6 w-full space-y-6">
                <Form {...form} >
                    <form 
                        className="w-full"
                        onSubmit={form.handleSubmit(onCreateDesign)}
                    >
                        <div className="w-full flex items-center">
                            <div className="w-full grid grid-cols-3 grid-rows-1 gap-x-2">
                                <FormField
                                    control={form.control}
                                    name="width"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel className="text-[13px] text-zinc-600 dark:text-zinc-300">width</FormLabel>
                                            <FormControl>
                                                <Input
                                                    onChange={(e)=>{
                                                        const value = e.target.value;
                                                        if (value === "") {
                                                            form.resetField("width");
                                                        }
                                                        else {
                                                            field.onChange(Number.parseFloat(value));
                                                        }
                                                    }}
                                                    value={field.value}
                                                    className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-zinc-300 hover:border-zinc-400 focus:border-violet-500 dark:bg-neutral-900/80 dark:border-zinc-600"
                                                    type="number"
                                                    disabled={isSubmitting || loading}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="height"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel className="text-[13px] text-zinc-600 dark:text-zinc-300" >height</FormLabel>
                                            <FormControl>
                                                <Input
                                                    onChange={(e)=>{
                                                        const value = e.target.value;
                                                        if (value === "") {
                                                            form.resetField("height");
                                                        }
                                                        else {
                                                            field.onChange(Number.parseFloat(value));
                                                        }
                                                    }}
                                                    value={field.value}
                                                    className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-zinc-300 hover:border-zinc-400 focus:border-violet-500 dark:bg-neutral-900/80 dark:border-zinc-600"
                                                    type="number"
                                                    disabled={isSubmitting || loading}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="unit"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel className="text-[13px] text-zinc-600 dark:text-zinc-300" >Unit</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                disabled={isSubmitting || loading}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-zinc-300 hover:border-zinc-400 focus:border-violet-500 dark:bg-neutral-900/80 dark:border-zinc-600" >
                                                        <SelectValue placeholder="Select unit"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="dark:bg-neutral-800 dark:border-zinc-600" >
                                                    <SelectItem className="dark:hover:bg-neutral-700 md:cursor-pointer" value={unit.Enum.px}>px</SelectItem>
                                                    <SelectItem className="dark:hover:bg-neutral-700 md:cursor-pointer" value={unit.Enum.in}>in</SelectItem>
                                                    <SelectItem className="dark:hover:bg-neutral-700 md:cursor-pointer" value={unit.Enum.mm}>mm</SelectItem>
                                                    <SelectItem className="dark:hover:bg-neutral-700 md:cursor-pointer" value={unit.Enum.cm}>cm</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        {
                            !isValid && form.watch().height && form.watch().width && (
                                <div className="text-red-500 my-2 text-[13px]" >
                                    {form.watch().unit === "cm" && "Dimensions must be at least 1.058cm and no more than 211.664cm."}
                                    {form.watch().unit === "in" && "Dimensions must be at least 0.417in and no more than 83.328in"}
                                    {form.watch().unit === "mm" && "Dimensions must be at least 10.583mm and no more than 2,116.664mm"}
                                    {form.watch().unit === "px" && "Dimensions must be at least 40px and no more than 8,000px"}
                                </div>
                            )
                        }
                        <Button
                            variant={ isValid ? "original": "secondary"}
                            className={cn(
                                "w-full font-semibold mt-4",
                                isValid && "text-white",
                                !isValid && "dark:bg-neutral-600"
                            )}
                            disabled={!isValid || isSubmitting || loading}
                            type="submit"
                        >
                            Create new design
                        </Button>
                    </form>
                </Form>
            </div>
            <div className="space-y-2 pr-6">
                <h2 className="text-[13px] text-zinc-800">Suggested</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {
                        isValid ? 
                        getDimensions(form.watch().height, form.watch().width, form.watch().unit).length > 0 ?
                        getDimensions(form.watch().height, form.watch().width, form.watch().unit).map((dimension)=>(
                            <DimensionCard
                                key={dimension.name}
                                dimension={dimension}
                                disabled={loading}
                                setLoading={(value: boolean)=>setLoading(value)}
                            />
                        )) : 
                        Dimensions.slice(0, 2).map((dimension)=>(
                            <DimensionCard
                                key={dimension.name}
                                dimension={dimension}
                                disabled={loading}
                                setLoading={(value: boolean)=>setLoading(value)}
                            />
                        )) :
                        Dimensions.slice(0, 2).map((dimension)=>(
                            <DimensionCard
                                key={dimension.name}
                                dimension={dimension}
                                disabled={loading}
                                setLoading={(value: boolean)=>setLoading(value)}
                            />
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}
