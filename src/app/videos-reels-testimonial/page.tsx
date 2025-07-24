const videoData = [
  {
    title: 'Robotic Surgery Explained',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Laparoscopy in Action',
    url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    title: 'What is Bariatric Surgery?',
    url: 'https://www.youtube.com/embed/zH-c99R2tMU',
  },
  {
    title: 'Post-Op Recovery Advice',
    url: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
  },
  {
    title: 'Inside the Operation Theater',
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE',
  },
  {
    title: 'Live GI Surgery Webinar',
    url: 'https://www.youtube.com/embed/vbF5QIwUPJg',
  },
  {
    title: 'Meet Dr. Shabeer',
    url: 'https://www.youtube.com/embed/oHg5SJYRHA0',
  },
  {
    title: 'How We Handle Emergencies',
    url: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
  },
  {
    title: 'Nutrition After Surgery',
    url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
  },
  {
    title: 'Common Myths About GI Surgery',
    url: 'https://www.youtube.com/embed/RgKAFK5djSk',
  }
];

const reelData = [
  {
    title: '1-Minute Robotic Clip',
    videoSrc: '/videos/reel1.mp4',
  },
  {
    title: 'Patient Recovery Reel',
    videoSrc: '/videos/reel2.mp4',
  },
  {
    title: 'Behind the Scenes',
    videoSrc: '/videos/reel3.mp4',
  },
  {
    title: 'Staff Introduction',
    videoSrc: '/videos/reel4.mp4',
  },
  {
    title: 'Sanitation Protocols',
    videoSrc: '/videos/reel5.mp4',
  },
  {
    title: 'Quick Tips: GI Health',
    videoSrc: '/videos/reel6.mp4',
  },
  {
    title: 'Smile of Recovery',
    videoSrc: '/videos/reel7.mp4',
  },
  {
    title: 'Diabetic Surgery Insight',
    videoSrc: '/videos/reel8.mp4',
  },
  {
    title: 'Outreach Camp Moments',
    videoSrc: '/videos/reel9.mp4',
  },
  {
    title: 'Daily Routine in Clinic',
    videoSrc: '/videos/reel10.mp4',
  }
];

const testimonialData = [
  {
    name: 'Arati Sethy',
    feedback: 'Amidst of covid pandemic, my aunt got diagnosed with colon tumor. Local doctors diagnosed it as cancer stage-1.',
    location: 'Bangalore',
  },
  {
    name: 'Inayathulla Khan Lavani',
    feedback: `Before visiting Dr. Shabeer Ahmed for my dad's surgery, I had visited other doctors and wasn't satisfied enough`,
    location: 'Hyderabad',
  },
  {
    name: 'Mir Nasair Hussain',
    feedback: 'Best ever Dr.I have seen in Bangalore God has given shiffa in his hand Excellent treatment centre in Bangalore',
    location: 'Mysore',
  },
  {
    name: 'Lakshmi D.',
    feedback: 'Modern, clean clinic and compassionate care.',
    location: 'Chennai',
  },
  {
    name: 'Arjun P.',
    feedback: 'I walked in scared, walked out confident thanks to the support.',
    location: 'Delhi',
  },
  {
    name: 'Zara K.',
    feedback: 'Grateful for the diet advice and guidance post-op.',
    location: 'Kochi',
  },
  {
    name: 'Farhan N.',
    feedback: 'Life-changing experience. Thank you!',
    location: 'Mumbai',
  },
  {
    name: 'Sneha V.',
    feedback: 'Follow-up care was as good as the surgery.',
    location: 'Pune',
  },
  {
    name: 'Rakesh G.',
    feedback: 'Highly advanced equipment and skilled doctor.',
    location: 'Ahmedabad',
  },
  {
    name: 'Meena R.',
    feedback: 'Friendly staff, caring environment, and great outcomes.',
    location: 'Coimbatore',
  }
];

export default function MediaShowcasePage() {
  return (
    <div className="media-showcase-wrapper">
      <div className="container">
        <h2 className="page-title">Media & Testimonials</h2>

        {/* <section className="media-section">
          <h3 className="section-heading">Videos</h3>
          <div className="media-grid">
            {videoData.map((video, index) => (
              <div className="media-card" key={index}>
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="media-video"
                ></iframe>
                <p className="media-title">{video.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="media-section">
          <h3 className="section-heading">Reels</h3>
          <div className="media-grid">
            {reelData.map((reel, index) => (
              <div className="media-card" key={index}>
                <video
                  className="media-video"
                  controls
                  src={reel.videoSrc}
                ></video>
                <p className="media-title">{reel.title}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section className="testimonial-section">
          <h3 className="section-heading">Patient Testimonials</h3>
          <div className="testimonial-grid">
            {testimonialData.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <p className="testimonial-feedback">"{item.feedback}"</p>
                <p className="testimonial-name">- {item.name}, {item.location}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
