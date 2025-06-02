'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
    {
        name: 'Arati Sethy',
        content: `Amidst of covid pandemic, my aunt got diagnosed with
      colon tumor. Local doctors diagnosed it as cancer
      stage-1. As they stay in my native place Odisha, we
      were clueless what to do. I live in bangalore. One
      of my colleague referred Dr. Shabeer. With no delay,
      i took his appointment and rushed to him. After
      going through the reports without even checking the
      patient, he said chemo may not be required. He
      helped a lot to get my aunt here and directly get
      admitted to Fortis for surgery. Post surgery, biopsy
      report revealed that its stage 0 and no need for
      chemo therapy. Everything just happened ontime and
      perfectly. When i thanked Dr. Sir, he was humble
      enough to give the credit to Allaha. Sir, you were a
      blessing to our family in this crisis. My uncle aunt
      were so happy and pleased by your interaction in
      entire process. May God always bless you and help
      you in serving mankind. Thank you very much.`,
    },
    {
        name: 'Inayathulla Khan Lavani',
        content: `Before visiting Dr. Shabeer Ahmed for my dad's
      surgery, I had visited other doctors and wasn't
      satisfied enough, and I must say Dr is very humble
      person who shows compassion towards patients and
      also authority in field of laparoscopy, which is
      rare combination to find in this mundane world.
      Moreover my dad's surgery was successful and he is
      recovering. I would definately recommend anyone to
      visit Dr once before taking final call`,
    },
    {
        name: 'Mir Nasair Hussain',
        content: `Best ever Dr.I have seen in Bangalore God has given
      shiffa in his hand Excellent treatment centre in
      Bangalore I was suffering piles from 11years He did
      my operation successful Dr. Shabeer Ahmed has 30
      years Excellent Experience God give him Good Health
      / wealth I salute you sir`,
    },
];

const TestimonialSection = () => {
    return (
        <section className="testimonial-section">
            <div className="container">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation
                    loop
                    className="testimonial-slider"
                >
                    {testimonials.map(({ name, content }, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-grid ovr-flw">
                                <div className="testimonial-info mx-5 ms-5">
                                    <div className="testimonial-content">
                                        <div className="section-header-one section-header section-inner-header testimonial-header">
                                            <h2 className="section-title">{name}</h2>
                                        </div>
                                        <div className="testimonial-details">
                                            <p>{content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;
