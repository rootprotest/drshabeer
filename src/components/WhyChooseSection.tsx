"use client";

import React from "react";

export default function WhyChooseSection() {
    return (
        <section className="why-choose-section">
            <div className="container">
                <div className="row" id="abt-faqs">
                    <div className="col-md-8">
                        <h3>Queen Elizabeth Hospital, Birmingham</h3>
                        <p className="abt-cont">
                            He further established a laparoscopic centre at Queen Elizabeth
                            Hospital, Birmingham, where he had successfully performed around 240
                            cases of colorectal cancers laparoscopically. These numbers were
                            recognized by the Association of Laparoscopic Surgery (ALS) and he was
                            made a “Preceptor”, who went around various parts of UK to train
                            surgeons
                        </p>

                        <h3>Areas of Expertise</h3>
                        <p className="abt-cont">
                            Advanced laparoscopic surgery especially for gastrointestinal cancer.
                            He has his passion for Video-Assisted Thoracic Surgery (VATS),
                            Bariatric Surgery and Metabolic Surgery. Robotic Surgery and Stem Cell
                            Therapy
                        </p>

                        <h3>Education & Training</h3>
                        <p className="abt-cont">
                            After having completed his Doctor of Medicine with honors from Madras
                            University (1986), he pursued his MS from Mysore University (1989). He
                            was further trained for 8 years as a surgeon in the Republic of Ireland
                            (1989 -1996). He obtained his FRCS from England in 1995. He joined
                            Professor Alfred Cuscheri in Nine well Hospital, Scotland with his
                            passion for Minimal Access Surgery and later was awarded with Master in
                            Minimal Access Surgery (MMAS) from Dundee University, Scotland. He also
                            spent his one full year doing research in laparoscopic handling and
                            submitted a thesis in 2002.
                        </p>
                        <p className="abt-cont">
                            He was appointed as a consultant colorectal surgeon in the republic of
                            Ireland from 1998 - 2001. He was later appointed as a consultant
                            colorectal surgeon in Queen Margaret Hospital, Dunfermline, Scotland
                            for 4 years.
                        </p>
                        <p className="abt-cont">
                            Currently doing a Ph.D in Stem Cell, Regenerative, and Tissue
                            Engineering.
                        </p>

                        <h3>Work Experience</h3>
                        <p className="abt-cont">
                            Dr. Shabeer Ahmed has experience of over 38 years in the field of
                            gastrointestinal & laparoscopic surgery.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card contact-form-card w-100 form-bg1">
                            <h3 className="abt-form-heed text-center">Book An Appointment</h3>
                            <div className="card-body">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            name="email"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            name="phone"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <textarea
                                            className="form-control"
                                            placeholder="Comments"
                                            name="comments"
                                            rows={4}
                                        ></textarea>
                                    </div>

                                    <div className="form-group mb-0 text-center">
                                        <button type="submit" className="btn btn-primary prime-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
