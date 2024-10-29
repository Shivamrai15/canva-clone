import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, code: string, name: string)=>{
    await resend.emails.send({
        from : "onboarding@resend.dev",
        to : email,
        subject : "Verification Code",
        html : `
        <p>Here is your Verification Code</p>
        <pre>
            <span style="font-size:20px;">
                ${code}
            </span>
          </pre>
        `
    });
}