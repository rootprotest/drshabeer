// pages/weight-loss-surgeon.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Weight Loss Surgeon - Obesity Treatment | Bangalore",
    description:
        "Learn how a weight loss surgeon can help treat obesity through lifestyle, medical, and surgical approaches. Discover the causes of obesity and effective management strategies.",
    keywords:
        "weight loss surgeon, obesity treatment, bariatric surgery, causes of obesity, obesity in bangalore, gastric bypass, sleeve gastrectomy"
};

export default function WeightLossSurgeonPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Obesity"
                imageSrc="/img/bannerslider/Obesity 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Obesity.webp"
                            alt="Weight Loss Surgeon"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is a Weight Loss Surgeon?</h3>
                        <p className="text-justify">
                            A weight loss surgeon specializes in treating obesity using a comprehensive, multidisciplinary approach that includes dietary changes, physical activity, behavioral therapy, and when necessary, surgical interventions.
                            Obesity is not simply about overeating — it's a complex metabolic condition influenced by genetics, hormones, environment, and psychological factors.
                            If you're looking for expert guidance on sustainable weight loss in Bangalore, a weight loss surgeon can help you navigate your options and create a personalized plan.
                        </p>
                    </Col>
                </Row>

                {/* Understanding Obesity */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Understanding Obesity</h4>
                        <p className="text-justify">
                            Obesity is a multifactorial condition involving genetic, environmental, hormonal, and behavioral influences.
                            While excessive calorie intake contributes to weight gain, many other factors affect how the body stores fat and regulates metabolism.
                            A personalized approach to weight management considers all these elements to provide effective, long-term solutions.
                        </p>

                        {/* Causes of Obesity */}
                        <h5 className="mt-4">Causes of Obesity</h5>

                        <h6>1. Genetic Factors</h6>
                        <ul>
                            <li><strong>Strong Family History:</strong> Genetics can strongly influence how the body stores fat and burns calories.</li>
                            <li><strong>Gene Variations:</strong> Specific genes such as those affecting leptin may be altered in some individuals, causing them to overeat even when their fat stores are sufficient.</li>
                        </ul>

                        <h6>2. Hormonal Imbalance</h6>
                        <ul>
                            <li><strong>Leptin Resistance:</strong> Leptin signals fullness; resistance disrupts appetite control.</li>
                            <li><strong>Insulin Resistance:</strong> Promotes increased fat accumulation and disrupts blood sugar regulation.</li>
                            <li><strong>Hypothyroidism:</strong> Slows down metabolism and leads to weight gain even without overeating.</li>
                            <li><strong>Polycystic Ovary Syndrome (PCOS):</strong> In women, PCOS increases abdominal fat due to insulin resistance and hormone imbalance.</li>
                            <li><strong>Cushing’s Syndrome:</strong> Excess cortisol production leads to central obesity.</li>
                        </ul>

                        <h6>3. Metabolic Factors</h6>
                        <ul>
                            <li><strong>Basal Metabolic Rate (BMR):</strong> Individuals with lower BMR burn fewer calories at rest, increasing the risk of weight gain.</li>
                            <li><strong>Set Point Theory:</strong> The body may resist significant weight changes, making sustained weight loss challenging.</li>
                        </ul>

                        <h6>4. Environmental and Behavioral Influences</h6>
                        <ul>
                            <li><strong>Diet:</strong> High-calorie, processed foods contribute to weight gain.</li>
                            <li><strong>Lack of Physical Activity:</strong> Sedentary lifestyle reduces calorie expenditure and muscle mass.</li>
                            <li><strong>Socio-Cultural Habits:</strong> Eating patterns, portion sizes, and food accessibility play a major role.</li>
                            <li><strong>Psychological Stress:</strong> Stress-induced eating and emotional eating can lead to weight gain.</li>
                            <li><strong>Depression & Mental Health:</strong> Some psychiatric medications cause weight gain.</li>
                        </ul>

                        <h6>5. Sleep Disorders</h6>
                        <ul>
                            <li><strong>Sleep Deprivation:</strong> Affects ghrelin and leptin levels, increasing hunger and cravings for high-calorie foods.</li>
                            <li><strong>Sleep Apnea:</strong> Disrupts sleep and lowers energy levels, contributing to further weight gain.</li>
                        </ul>

                        <h6>6. Medication Use</h6>
                        <ul>
                            <li><strong>Corticosteroids, Antipsychotics, Antidepressants, and Diabetes Medications:</strong> May promote weight gain as side effects.</li>
                        </ul>

                        <h6>7. Gut Microbiome</h6>
                        <ul>
                            <li><strong>Microbiome Imbalance:</strong> Altered gut bacteria can increase inflammation and fat storage.</li>
                            <li><strong>Diet Impact:</strong> Processed foods negatively affect gut flora and digestion.</li>
                        </ul>

                        <h6>8. Endocrine Disorders</h6>
                        <ul>
                            <li><strong>Hormonal Conditions:</strong> Hypothyroidism, Cushing’s syndrome, and PCOS can directly impact weight regulation.</li>
                        </ul>

                        <h6>9. Early Life Influences</h6>
                        <ul>
                            <li><strong>Pregnancy:</strong> Maternal obesity or gestational diabetes can predispose children to future obesity.</li>
                            <li><strong>Infant Feeding:</strong> Breastfeeding may reduce risk compared to formula feeding.</li>
                            <li><strong>Childhood Habits:</strong> Poor diet and lack of exercise during childhood increase adult obesity risk.</li>
                        </ul>

                        {/* How Do We Address Obesity? */}
                        <h4 className="mt-4">How Do We Address Obesity?</h4>

                        <h6>1. Dietary Interventions</h6>
                        <ul>
                            <li><strong>Caloric Deficit:</strong> Aim for a daily deficit of 500–1000 calories to lose 0.5–1 kg per week.</li>
                            <li><strong>Macronutrient Balance:</strong> Increase protein and fiber while moderating carbs and fats.</li>
                            <li><strong>Meal Frequency:</strong> Encourage regular meals and consider intermittent fasting based on individual tolerance.</li>
                            <li><strong>Mindful Eating:</strong> Teach portion control and healthy food choices.</li>
                        </ul>

                        <h6>2. Physical Activity</h6>
                        <p className="text-justify">
                            Increasing physical activity is crucial for improving metabolic rate and achieving sustained weight loss.
                            A minimum of 150–300 minutes of moderate-intensity exercise per week is recommended.
                        </p>

                        <h6>3. Psychological Support</h6>
                        <ul>
                            <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps change unhealthy eating behaviors.</li>
                            <li><strong>Stress Management:</strong> Reduces emotional eating and promotes healthier habits.</li>
                            <li><strong>Support Groups:</strong> Provide motivation and emotional support for long-term success.</li>
                            <li><strong>Goal Setting:</strong> Encouraging realistic, small, and achievable goals rather than focusing solely on large weight loss targets.</li>
                        </ul>

                        <h6>4. Medical Treatments</h6>
                        <ul>
                            <li><strong>Medications:</strong> For patients with BMI ≥ 30 kg/m² or ≥ 27 kg/m² with comorbidities, certain drugs like orlistat, liraglutide, and semaglutide can assist in weight loss.</li>
                            <li><strong>Gastric Balloon:</strong> A non-surgical device placed in the stomach to reduce food intake and promote early satiety.</li>
                        </ul>

                        <h6>5. Surgical Interventions</h6>
                        <ul>
                            <li><strong>Bariatric Surgery:</strong> Recommended for patients with BMI ≥ 40 or ≥ 35 with obesity-related conditions who haven't responded to conservative methods.</li>
                            <li><strong>Types of Surgery:</strong> Includes gastric bypass, sleeve gastrectomy, and adjustable gastric banding.</li>
                            <li><strong>Post-Surgery Follow-Up:</strong> Essential for long-term success, including nutrition counseling and monitoring.</li>
                        </ul>

                        {/* Why Choose Dr. Shabeer Ahmed */}
                        <h4 className="mt-4">Why Choose Dr. Shabeer Ahmed as Your Weight Loss Surgeon?</h4>
                        <p className="text-justify">
                            Dr. Shabeer Ahmed is a Senior Consultant in Gastrointestinal, Laparoscopic, and Bariatric Surgery with over 36 years of experience.
                            He provides a holistic and personalized approach to obesity treatment, ensuring each patient receives tailored care that aligns with their unique health profile and lifestyle.
                        </p>

                        <ul>
                            <li><strong>Comprehensive Evaluation:</strong> Identifies root causes behind obesity beyond just calorie intake.</li>
                            <li><strong>Advanced Techniques:</strong> Offers laparoscopic and robotic-assisted surgeries with faster recovery and minimal scarring.</li>
                            <li><strong>International Patient Care:</strong> Provides specialized assistance for patients from Arab countries and abroad.</li>
                            <li><strong>Follow-up and Monitoring:</strong> Ensures proper healing and long-term weight maintenance after surgery.</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Obesity is a complex condition that requires more than just diet and exercise — it demands a deep understanding of the underlying biological, psychological, and hormonal mechanisms.
                            Whether you're exploring lifestyle changes, medication, or surgical intervention, consulting with an experienced weight loss surgeon like Dr. Shabeer Ahmed ensures that your journey toward a healthier life is safe, effective, and sustainable.
                        </p>

                        {/* Call to Action */}
                        <p className="text-justify mt-3">
                            <strong>Contact Us:</strong> Schedule a consultation today and begin your journey toward lasting weight loss.
                            We offer international patient services, including travel and accommodation support for patients from Arab countries.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}