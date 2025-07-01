const newsEventsData = [
    {
        type: 'news',
        title: 'Robotic Surgery Interview',
        description: 'Dr. Shabeer shares insights into robotic surgery advancements.',
        date: 'June 15, 2025',
        category: 'Media',
        image: '/img/news/news1.jpg',
        badgeColor: 'blue'
    },
    {
        type: 'news',
        title: 'Medical Times Feature',
        description: 'Exploring metabolic surgery techniques and patient care.',
        date: 'May 10, 2025',
        category: 'Article',
        image: '/img/news/news2.jpg',
        badgeColor: 'teal'
    },
    {
        type: 'news',
        title: 'Digestive Health Awareness',
        description: 'A national program on GI health prevention tips.',
        date: 'April 28, 2025',
        category: 'TV',
        image: '/img/news/news3.jpg',
        badgeColor: 'orange'
    },
    {
        type: 'news',
        title: 'Precision Surgery Feature',
        description: 'Featured in Surgical Monthly for precision techniques.',
        date: 'March 20, 2025',
        category: 'Magazine',
        image: '/img/news/news4.jpg',
        badgeColor: 'purple'
    },
    {
        type: 'news',
        title: 'Guest Lecture on GI Robotics',
        description: 'Delivered expert talk on robotic-assisted GI procedures.',
        date: 'Feb 15, 2025',
        category: 'Talk',
        image: '/img/news/news5.jpg',
        badgeColor: 'gray'
    },
    {
        type: 'event',
        title: 'Health Talk: Bariatric Procedures',
        description: 'Join us on July 20, 2025 for a special session at Bangalore Clinic.',
        date: 'July 20, 2025',
        category: 'Upcoming',
        badgeColor: 'green'
    },
    {
        type: 'event',
        title: 'Webinar: Robotic GI Surgery',
        description: 'A Zoom webinar on robotic surgery techniques and results.',
        date: 'August 10, 2025',
        category: 'Webinar',
        badgeColor: 'red'
    },
    {
        type: 'event',
        title: 'Free Health Camp',
        description: 'A free screening camp open to the public in Mysore Road.',
        date: 'September 2025',
        category: 'Community',
        badgeColor: 'blue'
    },
    {
        type: 'event',
        title: 'Digestive Health Seminar',
        description: 'Live seminar with patients & professionals in Hyderabad.',
        date: 'October 2025',
        category: 'Seminar',
        badgeColor: 'purple'
    },
    {
        type: 'event',
        title: 'Diabetes Awareness Camp',
        description: 'A free awareness and screening camp for diabetic patients.',
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
                <h2 className="section-title">Latest News & Events</h2>

                {/* News Section */}
                <section className="news-section">
                    <h3 className="sub-title">In the News</h3>
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

                {/* Events Section */}
                <section className="events-section">
                    <h3 className="sub-title">Upcoming Events</h3>
                    <div className="card-grid">
                        {eventItems.map((item, index) => (
                            <div className="card" key={index}>
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
