// src/app/api/sendEmail/route.ts
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['ravi.k@imsolutions.mobi'],
            subject: 'New Contact Enquiry',
            html: `
        <h3>New Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
    } catch (error) {
        console.error("Error sending via Resend:", error);
        return new Response(JSON.stringify({ status: 'error' }), { status: 500 });
    }
}

/*
// app/api/sendEmail/route.ts
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("Received form data:", body); // 👈 Log incoming data

        const { name, email, phone, service, message } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ status: 'error', error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Dr Shabeer Ahmed Clinic" <${process.env.GMAIL_USER}>`,
            to: "ravi.k@imsolutions.mobi",
            replyTo: email,
            subject: `New Enquiry - ${service || 'General'}`,
            html: `
        <h3>New Contact Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ status: 'error', error: 'Failed to send message' }),
            { status: 500 }
        );
    }
}*/