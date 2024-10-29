"use client";

import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { OauthButton } from "./oauth-button";
import { LoginForm } from "@/components/auth/forms/login.form";


export const LoginCard = () => {

    const [useEmail, setUseEmail] = useState(false);

    return (
        <div className="w-full p-6 md:p-7 md:py-9">
            {
                useEmail  ? (
                    <div className="w-full">
                        <LoginForm onBack={()=>setUseEmail(false)} />
                    </div>
                ) : (
                    <div className="space-y-6 w-full">
                        <h1 className="text-xl md:text-2xl font-semibold">Log in or sign up in seconds</h1>
                        <p className="text-sm text-zinc-300">Use your email or another service to continue with Canva (it’s free)!</p>
                        <div className="space-y-4">
                            <OauthButton
                                title="Continue with Google"
                                onClick={()=>{}}
                                disabled={false}
                                icon={FcGoogle}
                            />
                            <OauthButton
                                title="Continue with Github"
                                icon={FaGithub}
                                onClick={()=>{}}
                                disabled={false}
                            />
                            <OauthButton
                                title="Continue with Email"
                                icon={HiOutlineMail}
                                onClick={()=>setUseEmail(true)}
                                disabled={false}
                            />
                        </div>
                        <p className="text-sm text-zinc-300">By continuing, you agree to Canva’s Terms of Use. Read our Privacy Policy.</p>
                        <div
                            className="block"
                            onClick={()=>setUseEmail(true)}
                        >
                            <p className="text-[15px] font-semibold cursor-default md:cursor-pointer">Sign up with your work email</p>
                        </div>
                    </div>  
                )
            }
        </div>
    )
}
