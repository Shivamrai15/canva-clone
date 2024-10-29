"use client"

import axios from "axios";
import * as z from "zod";
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
import { toast } from "sonner";
// import { useFormControl } from "@/hooks/use-form-control";
import { useEffect, useState } from "react";
import { login } from "@/server/login";

const formSchema = z.object({
    code : z.string().min(6, {
        message : "Please ensure you have entered a valid verification code."
    })
});

interface VerificationCodeProps {
    email: string;
    onBack : ()=>void;
}

export const VerificationCodeForm = ({
    email,
    onBack
}: VerificationCodeProps ) => {

    const [error, setError] = useState("");
    const [resend, setResend] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resendTime, setResendTime] = useState(60);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            code : ""
        }
    });

    const { isSubmitting } = form.formState;

    const onContinue = async(values: z.infer<typeof formSchema>)=>{
        try {
            const { message, status } = await login(email, values.code)
            if (!status) {
                setError(message);
                return;
            }
            setError("");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    

    useEffect(()=>{
        let timeOut: NodeJS.Timer;
        let interval: NodeJS.Timer;
        console.log("ResendValue", resend)
        if(!resend) {
            timeOut = setTimeout(()=>{
                setResend(true);
                setResendTime(60);
            }, 60000);
            interval = setInterval(()=>{
                setResendTime((prev)=>(prev-1))
            }, 1000);
        }
        return () => {
            clearInterval(timeOut);
            clearInterval(interval);
        };
    }, [resend]);


    const handleResendEmail = async()=>{
        try {
            setLoading(true);
            await axios.post('/api/v1/account/verification', {email});
            setResend(false);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }


    
    return (
        <div className="w-full space-y-5">
            <div className="flex items-center gap-x-1">
                <ChevronLeft className="h-6 w-6 cursor-default md:cursor-pointer" onClick={onBack} />
                <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
                    You’re almost signed up
                </h2>
            </div>
            <p className="text-sm text-zinc-300 font-medium">Enter the code we sent to {email} to finish signing up.</p>
            {
                error && (
                    <div className="w-full py-2 px-4 rounded-lg bg-red-700/50 text-[13px] text-zinc-100">
                        {error}
                    </div>
                )
            }
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onContinue)}
                >
                    <FormField
                        control={form.control}
                        name="code"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel className="text-sm text-zinc-200 font-semibold">
                                    Code
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
                        disabled={isSubmitting||loading}
                    >
                        {
                            (isSubmitting||loading) ? <Loader2 className="animate-spin h-5 w-5"/> : "Continue"
                        }
                    </Button>
                    <div>
                        <span className="text-sm text-zinc-400">Didn’t get the code?</span>
                        {
                            resend ? (
                                <Button
                                    variant="link"
                                    className="text-violet-600 px-1"
                                    disabled={loading||isSubmitting}
                                    onClick={handleResendEmail}
                                    type="button"
                                >
                                    Resend code
                                </Button>
                            ) : (
                                <span className="pl-1 text-sm text-zinc-400">
                                    Resend in {resendTime} seconds
                                </span>
                            )
                        }
                    </div>
                </form>
            </Form>
        </div>
    )
}
