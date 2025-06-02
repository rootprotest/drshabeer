// app/contact/page.tsx
'use client';
import BariatricBanner from '@/components/BreadcrumbBanner';

// Import required modules from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
    return (
        <>
            <BariatricBanner title="Contact Us" imageSrc="/img/bannerslider/Bariatric Surgery 2.webp" />
            <div className="mt-5">
                <section className="contact-section py-5">
                    <div className="container">
                        <div className="row">
                            {/* Left Side - Contact Info */}
                            <div className="col-lg-5 col-md-12">
                                <div className="section-inner-header contact-inner-header mb-4">
                                    <h6>Get in touch</h6>
                                    <h2>Have Any Question?</h2>
                                </div>

                                <div className="card contact-card mb-3">
                                    <div className="card-body d-flex align-items-start">
                                        <div className="contact-icon me-3">
                                            <FontAwesomeIcon icon={faMapPin} size="lg" />
                                        </div>
                                        <div className="contact-details">
                                            <h4>Address</h4>
                                            <p>8432 Mante Highway, Aminaport, USA</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card contact-card mb-3">
                                    <div className="card-body d-flex align-items-start">
                                        <div className="contact-icon me-3">
                                            <FontAwesomeIcon icon={faPhone} size="lg" />
                                        </div>
                                        <div className="contact-details">
                                            <h4>Phone Number</h4>
                                            <p>+1 315 369 5943</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card contact-card">
                                    <div className="card-body d-flex align-items-start">
                                        <div className="contact-icon me-3">
                                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                        </div>
                                        <div className="contact-details">
                                            <h4>Email Address</h4>
                                            <p>drshabeerahmed@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Contact Form */}
                            <div className="col-lg-7 col-md-12 d-flex">
                                <div className="card contact-form-card w-100">
                                    <div className="card-body">
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Email Address</label>
                                                    <input type="email" className="form-control" placeholder="Enter Email Address" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Phone Number</label>
                                                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="form-label">Services</label>
                                                    <input type="text" className="form-control" placeholder="Enter Services" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label className="form-label">Message</label>
                                                    <textarea className="form-control" rows={4} placeholder="Enter your comments"></textarea>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-primary prime-btn w-100">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Map */}
                <div className="contact-map">
                    <iframe
                        className="w-100"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
