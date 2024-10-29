"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormMessage,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";
import { ChevronLeft } from "lucide-react";
import { EmailSchema } from "@/schemas/email.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
    onBack : ()=>void;
}

export const LoginForm = ({
    onBack
}: LoginFormProps) => {
    
    
    const form = useForm<z.infer<typeof EmailSchema>>({
        resolver : zodResolver(EmailSchema),
        defaultValues : {
            email : ""
        }
    });

    const onContinue = async(values : z.infer<typeof EmailSchema>)=>{
        try {
            
        } catch (error) {
            
        }
    }
    
    return (
        <div className="w-full space-y-5">
            <div className="flex items-center gap-x-1">
                <ChevronLeft className="h-6 w-6 cursor-default md:cursor-pointer" onClick={onBack} />
                <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                    Continue with email
                </h2>
            </div>
            <p className="text-sm text-zinc-300 font-medium">We’ll check if you have an account, and help create one if you don’t.</p>
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onContinue)}
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel className="text-sm text-zinc-200 font-semibold">
                                    Email (personal or work)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="rounded-lg h-10 border-zinc-600 bg-neutral-900 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-violet-600"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button
                        className="text-base font-semibold w-full h-10 rounded-lg"
                        variant="original"
                        type="submit"
                    >
                        Continue
                    </Button>
                </form>
            </Form>
        </div>
    )
}
