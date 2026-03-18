import '../css/Event.css'

const Event = ({ event }) => {

    return (
        <article className='event-card'>
            <div className='event-card-top'>
                <img src={event.image} alt={event.name} />
            </div>
            <div className='event-card-bottom'>
                <h3>{event.name}</h3>
                <div className='event-meta'>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Time:</strong> {event.time}</p>
                </div>
                <p className='event-description'>{event.description}</p>
            </div>
        </article>
    );
};

export default Event