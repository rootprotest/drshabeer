// pages/swallowable-balloon.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Swallowable Balloon for Weight Loss | Bangalore",
    description:
        "Learn about the swallowable balloon as a non-surgical weight loss option. Discover how it works, its benefits, eligibility, and recovery in Bangalore.",
    keywords:
        "swallowable balloon, gastric balloon, non-surgical weight loss, intragastric balloon, obesity treatment, Bangalore"
};

export default function SwallowableBalloonPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Swallowable Balloon"
                imageSrc="/img/bannerslider/Gastritis 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Gastroesophageal reflux disease.webp"
                            alt="Swallowable Balloon"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is a Swallowable Balloon?</h3>
                        <p className="text-justify">
                            The swallowable balloon, also known as the intragastric balloon, is an innovative, non-surgical solution for managing obesity.
                            It offers a minimally invasive approach to help individuals achieve weight loss when traditional methods like diet and exercise have not been effective.
                            This treatment is particularly suitable for people who may not qualify for or want to avoid bariatric surgery but still desire meaningful weight reduction.
                        </p>
                    </Col>
                </Row>

                {/* How It Works */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>How Does the Swallowable Balloon Work?</h4>
                        <p className="text-justify">
                            A swallowable balloon is a soft, expandable medical device that is placed inside the stomach to promote feelings of fullness and reduce food intake.
                            Unlike traditional gastric balloons that require endoscopy and sedation for insertion, this balloon comes in capsule form and can be swallowed easily.
                        </p>

                        <p className="text-justify">
                            Once the capsule reaches the stomach, it's inflated using a sterile solution through a small catheter.
                            The balloon floats freely in the stomach, taking up space and limiting the amount of food the stomach can hold.
                            Patients experience early satiety and reduced appetite, which helps them consume fewer calories.
                            The balloon remains in place for about 4–6 months and is then safely deflated and naturally passed through the digestive system.
                        </p>

                        {/* Benefits */}
                        <h4 className="mt-4">Benefits of the Swallowable Balloon</h4>
                        <ul>
                            <li><strong>Non-Surgical & Minimally Invasive:</strong> No incisions, stitches, or anesthesia required.</li>
                            <li><strong>Effective Weight Loss:</strong> On average, patients lose 10–15% of their total body weight during the 6-month period.</li>
                            <li><strong>Quick Procedure:</strong> Placement takes just 15–20 minutes; no hospitalization needed.</li>
                            <li><strong>Temporary and Reversible:</strong> Not permanent — can be removed anytime or will pass naturally after 6 months.</li>
                            <li><strong>No Recovery Time:</strong> Patients can resume normal activities immediately after placement.</li>
                            <li><strong>Lower Risk:</strong> Eliminates surgical risks like infections, bleeding, or long-term complications.</li>
                            <li><strong>Cost-Effective:</strong> More affordable than bariatric surgery.</li>
                            <li><strong>Natural Exit:</strong> After 4–6 months, the balloon deflates and exits the body on its own without requiring removal procedures.</li>
                        </ul>

                        {/* Who Is a Candidate? */}
                        <h4 className="mt-4">Who Is a Candidate for the Swallowable Balloon?</h4>
                        <p className="text-justify">
                            The swallowable balloon is ideal for individuals with a Body Mass Index (BMI) between 27 and 40 who are looking for a non-invasive way to kickstart their weight loss journey.
                            It's especially beneficial for those who want to avoid major surgery or need temporary support before undergoing more permanent weight loss solutions.
                        </p>

                        {/* Ideal Candidates */}
                        <ul>
                            <li>BMI between 27–40</li>
                            <li>Not eligible for or do not wish to undergo bariatric surgery</li>
                            <li>Motivated to make lifestyle changes to maintain weight loss</li>
                            <li>Looking for a safe and reversible method</li>
                        </ul>

                        {/* Risks and Considerations */}
                        <h4 className="mt-4">Risks and Considerations</h4>
                        <p className="text-justify">
                            While generally safe, some patients may experience temporary side effects such as nausea, vomiting, or abdominal discomfort as the body adjusts to the balloon.
                            It’s important to follow a balanced diet and maintain an exercise regimen to maximize the benefits and prevent weight regain after the balloon is removed.
                        </p>

                        {/* What to Expect */}
                        <h4 className="mt-4">What to Expect During the Procedure</h4>
                        <ol>
                            <li><strong>Pre-procedure Consultation:</strong> Evaluation by a specialist to ensure suitability.</li>
                            <li><strong>Capsule Swallowing:</strong> The balloon comes in a capsule form that you swallow under supervision.</li>
                            <li><strong>Inflation:</strong> Once in the stomach, the balloon is inflated via a thin catheter with saline or gas.</li>
                            <li><strong>Monitoring:</strong> You'll be observed briefly before being sent home the same day.</li>
                            <li><strong>Diet Counseling:</strong> Nutritional guidance and behavioral support are provided to optimize results.</li>
                        </ol>

                        {/* Why Choose Dr. Shabeer Ahmed */}
                        <h4 className="mt-4">Why Choose Dr. Shabeer Ahmed for Swallowable Balloon Treatment?</h4>
                        <p className="text-justify">
                            Dr. Shabeer Ahmed is a Senior Consultant in Gastrointestinal, Laparoscopic, and Bariatric Surgery with over 36 years of experience.
                            He provides expert care and personalized support to ensure each patient receives optimal outcomes.
                        </p>
                        <ul>
                            <li><strong>Expert Team:</strong> Experienced professionals guide you through every step of your weight loss journey.</li>
                            <li><strong>State-of-the-Art Facility:</strong> Modern infrastructure and advanced tools for safe and effective treatment.</li>
                            <li><strong>Comprehensive Care:</strong> Includes pre-procedure consultation, post-placement monitoring, and nutrition counseling.</li>
                            <li><strong>International Patient Support:</strong> Special assistance for patients from Arab countries and abroad.</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            The swallowable balloon is a breakthrough in weight management, offering a non-invasive and effective way to help individuals lose weight and improve overall health.
                            When combined with lifestyle changes, it can be a powerful tool for improving quality of life and achieving sustainable weight loss.
                            If you're exploring non-surgical options in Bangalore, consult Dr. Shabeer Ahmed to determine if the swallowable balloon is right for you.
                        </p>

                        {/* Call to Action */}
                        <p className="text-justify mt-3">
                            <strong>Contact Us:</strong> Schedule a consultation today and begin your journey toward healthier living.
                            We offer specialized services for international patients, including travel and accommodation assistance.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}