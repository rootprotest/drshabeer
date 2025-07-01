const announcementData = [
    {
        title: 'Clinic Closed on August 15',
        description: 'Please note that the clinic will remain closed on Independence Day.',
        date: 'August 1, 2025',
        category: 'Holiday',
        badgeColor: 'red'
    },
    {
        title: 'New Robotic Unit Installed',
        description: 'We’ve upgraded our facility with the latest Da Vinci XI system.',
        date: 'July 10, 2025',
        category: 'Technology',
        badgeColor: 'blue'
    },
    {
        title: 'Evening OPD Timings Updated',
        description: 'Evening consultation hours are now from 5:00 PM to 8:00 PM.',
        date: 'June 25, 2025',
        category: 'Schedule',
        badgeColor: 'green'
    },
    {
        title: 'Covid-19 Safety Guidelines Updated',
        description: 'All visitors are required to wear masks and sanitize before entry.',
        date: 'June 5, 2025',
        category: 'Health',
        badgeColor: 'teal'
    }
];

export default function AnnouncementPage() {
    return (
        <div className="announcement-wrapper">
            <div className="container">
                <h2 className="page-title">Announcements</h2>
                <p className="page-description">Stay up to date with the latest updates and important information from our clinic.</p>

                <div className="announcement-grid">
                    {announcementData.map((item, index) => (
                        <div className="announcement-card" key={index}>
                            <div className="announcement-header">
                                <span className={`badge ${item.badgeColor}`}>{item.category}</span>
                                <small className="date">{item.date}</small>
                            </div>
                            <h4 className="announcement-title">{item.title}</h4>
                            <p className="announcement-text">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
