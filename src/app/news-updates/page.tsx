const newsEventsData = [
  {
    type: 'news',
    title: 'Robotic Surgery Interview',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec.',
    date: 'June 15, 2025',
    category: 'Media',
    image: '/img/icons/Life-After-Gallbladder-Removal--What-to-Expect.png',
    badgeColor: 'blue'
  },
  {
    type: 'news',
    title: 'Medical Times Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lorem non.',
    date: 'May 10, 2025',
    category: 'Article',
    image: '/img/icons/Life-After-Gallbladder-Removal--What-to-Expect.png',
    badgeColor: 'teal'
  },
  {
    type: 'news',
    title: 'Digestive Health Awareness',
    description: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore.',
    date: 'April 28, 2025',
    category: 'TV',
    image: '/img/icons/Life-After-Gallbladder-Removal--What-to-Expect.png',
    badgeColor: 'orange'
  },
  {
    type: 'news',
    title: 'Precision Surgery Feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at enim.',
    date: 'March 20, 2025',
    category: 'Magazine',
    image: '/img/icons/Life-After-Gallbladder-Removal--What-to-Expect.png',
    badgeColor: 'purple'
  },
  {
    type: 'news',
    title: 'Guest Lecture on GI Robotics',
    description: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna.',
    date: 'Feb 15, 2025',
    category: 'Talk',
    image: '/img/icons/Life-After-Gallbladder-Removal--What-to-Expect.png',
    badgeColor: 'gray'
  },
  {
    type: 'event',
    title: 'Health Talk: Bariatric Procedures',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel.',
    date: 'July 20, 2025',
    category: 'Upcoming',
    badgeColor: 'green'
  },
  {
    type: 'event',
    title: 'Webinar: Robotic GI Surgery',
    description: 'Lorem ipsum dolor sit amet, consectetur. Suspendisse sit amet mauris.',
    date: 'August 10, 2025',
    category: 'Webinar',
    badgeColor: 'red'
  },
  {
    type: 'event',
    title: 'Free Health Camp',
    description: 'Lorem ipsum dolor sit amet, consectetur. Sed ut perspiciatis unde.',
    date: 'September 2025',
    category: 'Community',
    badgeColor: 'blue'
  },
  {
    type: 'event',
    title: 'Digestive Health Seminar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at.',
    date: 'October 2025',
    category: 'Seminar',
    badgeColor: 'purple'
  },
  {
    type: 'event',
    title: 'Diabetes Awareness Camp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
    date: 'November 2025',
    category: 'Outreach',
    badgeColor: 'teal'
  }
];


export default function Newsupdate() {
    const newsItems = newsEventsData.filter(item => item.type === 'news');
    const eventItems = newsEventsData.filter(item => item.type === 'event');

    return (
        <div className="news-events-wrapper">
            <div className="container">
                <h2 className="section-title mt-5">Latest News & Events</h2>

                {/* News Section */}
                <section className="news-section">
                    <div className="card-grid">
                        {newsItems.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.image} alt={item.title} className="card-image" />
                                <div className="card-content">
                                    <span className={`badge ${item.badgeColor}`}>{item.category}</span>
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-text">{item.description}</p>
                                    <small className="date">{item.date}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                
            </div>
        </div>
    );
}
