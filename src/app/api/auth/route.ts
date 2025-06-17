// src/app/api/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    // Dummy login check
    if (email === 'admin@gmail.com' && password === 'password123') {
        return NextResponse.json(
            { message: 'Login successful' },
            {
                status: 200,
                headers: {
                    'Set-Cookie': `adminAuth=true; Path=/admin; Max-Age=${60 * 60}; SameSite=Strict`,
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
    );
}