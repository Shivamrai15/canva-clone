"use client";

import * as z from "zod";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Globe, LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";
import { CollaborationSchema } from "@/schemas/collaboration.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormControl
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";


export const CollaborationForm = () => {

    const form = useForm<z.infer<typeof CollaborationSchema>>({
        resolver : zodResolver(CollaborationSchema),
        defaultValues : {

        }
    })
    
    return (
        <div className='w-full space-y-2 py-2'>
                <h2 className='text-sm text-zinc-800 select-none font-semibold dark:text-zinc-300'>Collaboration link</h2>
                <Form {...form} >
                    <form>
                        <div>
                            <FormField
                                control={form.control}
                                name="isPrivate"
                                render={({field})=>(
                                    <FormItem

                                    >
                                        <Select 
                                            defaultValue={field.value? "true":  "false"}
                                        >
                                            <FormControl>
                                                <SelectTrigger 
                                                    className="w-full h-fit rounded-xl"
                                                >
                                                    <SelectValue placeholder="Theme" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent
                                                className="p-0 rounded-xl"
                                            >
                                                <SelectItem
                                                    value="false"
                                                    className="py-4 px-2"
                                                    aria-label="Only you can access"
                                                >
                                                    <div className="flex flex-row gap-x-3 items-start">
                                                        <LockKeyhole className="h-5 w-5 shrink-0 text-zinc-800" />
                                                        <span className="flex flex-col">
                                                            <h5 className="text-sm text-left font-medium tracking-tight text-zinc-700 line-clamp-1">Only you can access</h5>
                                                        </span>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem
                                                    value="true"
                                                    className="py-4 px-2"
                                                >
                                                    <div className="flex flex-row gap-x-3 items-start">
                                                        <Globe className="h-5 w-5 shrink-0 text-zinc-800" />
                                                        <span className="flex flex-col w-full">
                                                            <h5 className="text-sm text-left font-medium tracking-tight text-zinc-700 line-clamp-1">Anyone with the link</h5>
                                                        </span>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
                <Button
                    className="w-full transition-all rounded-lg text-white font-semibold"
                    variant="original"
                >
                    Copy link
                </Button>
            </div>
    )
}


{/*  */}
