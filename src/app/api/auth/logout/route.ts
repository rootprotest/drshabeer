// src/app/api/auth/logout/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    return NextResponse.json(
        { message: 'Logged out successfully' },
        {
            status: 200,
            headers: {
                'Set-Cookie': `adminAuth=; Path=/admin; HttpOnly; Max-Age=0;`
            },
        }
    );
}