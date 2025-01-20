import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const password = process.env.NEXT_PUBLIC_NODEMAILER_PASS
    const myEmail = process.env.NEXT_PUBLIC_NODEMAILER_EMAIL

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: myEmail,
            pass: password
        }
    })
    try {
        const mail = await transporter.sendMail({
            priority: 'high',
            from: myEmail,
            to: myEmail,
            subject: 'Test topic',
            html: '<h1 style="color: red;">HELLO FRIEND</h1><p>Hello world!</p>'
        })

        return NextResponse.json({message: 'Succesfully sent message'}, {status: 200})
    } catch (e) {
        console.error(e);
        return NextResponse.json({message: "Could not send message!"}, {status: 500})
    }
}
