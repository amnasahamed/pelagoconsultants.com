import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const linkedin = formData.get('linkedin');
        const reason = formData.get('reason');
        const jobTitle = formData.get('jobTitle');
        const department = formData.get('department');
        const cv = formData.get('attachment'); // This matches our form's name="attachment"

        // Configure Nodemailer transporter
        // NOTE: In production, these must be in .env.local
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'fo.pelago02@gmail.com',
            replyTo: email,
            subject: `New Application: ${jobTitle} - ${name}`,
            text: `
                New application received for ${jobTitle} (${department}).
                
                Candidate Details:
                - Name: ${name}
                - Email: ${email}
                - LinkedIn: ${linkedin}
                
                Why they want to join:
                ${reason}
            `,
            attachments: cv && cv.size > 0 ? [
                {
                    filename: cv.name,
                    content: Buffer.from(await cv.arrayBuffer()),
                },
            ] : [],
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Email API Error:', error);
        return NextResponse.json({ error: 'Failed to send application.' }, { status: 500 });
    }
}
