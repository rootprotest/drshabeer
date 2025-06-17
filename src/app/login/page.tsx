// src/app/login/page.tsx
'use client'

import BariatricBanner from '@/components/BreadcrumbBanner';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            window.location.href = '/admin/dashboard'; // ← force reload
        } else {
            const data = await res.json();
            setError(data.message || 'Invalid credentials');
        }
    };

    return (
        <>
            <BariatricBanner
                title="Admin Login"
                imageSrc="/img/bannerslider/Surgery For Reflux 2.webp"
            />

            <Container className="container my-5">
                <Row className="align-items-center justify-content-center">
                    <Col className="mb-4 col-md-6">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}