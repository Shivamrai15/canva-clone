"use client";

import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormMessage,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";
import { ChevronLeft, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NameSchema } from "@/schemas/name.schema";
import { toast } from "sonner";
import { useFormControl } from "@/hooks/use-form-control";
import { User } from "@prisma/client";



interface NameFormProps {
    onBack : ()=>void;
    email : string;
}

const emailToName = (email: string)=>{
    const name = email.split("@")[0]
    const beautyifyName = name.charAt(0).toUpperCase()+name.slice(1);
    return beautyifyName;
}

export const NameForm = ({
    onBack,
    email
}: NameFormProps) => {

    const { setControl } = useFormControl();

    const form = useForm<z.infer<typeof NameSchema>>({
        resolver : zodResolver(NameSchema),
        defaultValues : {
            name : emailToName(email),
            email
        }
    });

    const { isSubmitting } = form.formState;

    const onContinue = async(values: z.infer<typeof NameSchema>)=>{
        try {

            const response = await axios.patch("/api/v1/account", values);
            const data: User = response.data;
            setControl("CODE", data.email);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    
    return (
        <div className="w-full space-y-5">
            <div className="flex items-center gap-x-1">
                <ChevronLeft className="h-6 w-6 cursor-default md:cursor-pointer" onClick={onBack} />
                <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                    Create your account
                </h2>
            </div>
            <p className="text-sm text-zinc-300 font-medium">You&apos;re creating a Canva account with {email} </p>
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onContinue)}
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel className="text-sm text-zinc-200 font-semibold">
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="rounded-lg h-10 border-zinc-600 bg-neutral-900 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-violet-600"
                                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                    >
                        {
                            isSubmitting ? <Loader2 className="animate-spin h-5 w-5"/> : "Continue"
                        }
                    </Button>
                </form>
            </Form>
        </div>
    )
}
