import { LoginCard } from "@/components/auth/ui/login-card";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Login to your Canva account",
    description : "Login to access and create your next design."
}

const LoginPage = () => {
    return (
        <div className="h-full flex items-center justify-center p-6">
            <div className="max-w-[23rem] w-full bg-neutral-800 text-white rounded-md">
                <LoginCard />  
            </div>
        </div>
    )
}

export default LoginPage;