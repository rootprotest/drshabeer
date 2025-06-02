'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MoreInfoSection = () => {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="main-wrapper home-one">
            <div className="side-content-container">
                <Button
                    className="side-btn"
                    onClick={() => setShowContent(!showContent)}
                >
                    For More Information
                </Button>

                {showContent && (
                    <div className="hover-content position-absolute">
                        <section className="mor-info">
                            <Container>
                                <Row style={{ width: '330px' }}>
                                    {/* Card 1 */}
                                    <Col xl={12} lg={12} md={6} className="mb-2">
                                        <div className="specialist-card2 d-flex align-items-center m-2">
                                            <div className="specialist-img">
                                                <Image
                                                    src="/img/category/stethoscope-solid.svg"
                                                    alt="bone-image"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className="flex-grow-1 text-white">
                                                <Link
                                                    href="https://www.fortishealthcare.com/doctors/dr-shabeer-ahmed-773?hospital=3514"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-decoration-none"
                                                >
                                                    <h6 className="mb-0 text-white">Book Appointment in Fortis Hospital</h6>
                                                </Link>
                                            </div>
                                            <div className="ms-auto text-white">
                                                <i className="fas fa-long-arrow-alt-right" />
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Card 2 */}
                                    <Col xl={12} lg={12} md={6} className="mb-2">
                                        <div className="specialist-card2 d-flex align-items-center m-2">
                                            <div className="specialist-img">
                                                <Image
                                                    src="/img/category/stethoscope-solid.svg"
                                                    alt="stethoscope-image"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className="flex-grow-1 text-white">
                                                <Link
                                                    href="https://www.eka.care/doctor/dr-shabeer-gastroenterologist-bengaluru"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-decoration-none"
                                                >
                                                    <h6 className="mb-0 text-white">Request an Appointment</h6>
                                                </Link>
                                            </div>
                                            <div className="ms-auto text-white">
                                                <i className="fas fa-long-arrow-alt-right" />
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Card 3 */}
                                    <Col xl={12} lg={12} md={6} className="mb-2">
                                        <div className="specialist-card2 d-flex align-items-center m-2">
                                            <div className="specialist-img">
                                                <Image
                                                    src="/img/category/phone-solid.svg"
                                                    alt="phone-image"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className="flex-grow-1 text-white">
                                                <Link
                                                    href="https://wa.me/919071246002"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-decoration-none"
                                                >
                                                    <h6 className="mb-0 text-white">WhatsApp</h6>
                                                </Link>
                                            </div>
                                            <div className="ms-auto text-white">
                                                <i className="fas fa-long-arrow-alt-right" />
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Card 4 */}
                                    <Col xl={12} lg={12} md={6}>
                                        <div className="specialist-card2 d-flex align-items-center m-2">
                                            <div className="specialist-img">
                                                <Image
                                                    src="/img/category/phone-solid.svg"
                                                    alt="contact-image"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className="flex-grow-1 text-white">
                                                <Link
                                                    href="https://wa.me/919071246002"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-decoration-none"
                                                >
                                                    <h6 className="mb-0 text-white">Contact Us</h6>
                                                </Link>
                                            </div>
                                            <div className="ms-auto text-white">
                                                <i className="fas fa-long-arrow-alt-right" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoreInfoSection;
