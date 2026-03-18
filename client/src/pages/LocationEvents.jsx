import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import EventsAPI from "../services/EventsAPI";
import Event from "../components/Event";
import "../css/LocationEvents.css";

const LocationEvents = () => {
  const { id } = useParams(); 
  const [locationName, setLocationName] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const locationsData = await EventsAPI.getLocations();
        const selectedLocation = locationsData.find(
          (loc) => loc.id === parseInt(id),
        );

        if (selectedLocation) {
          setLocationName(selectedLocation.name);

          const filteredEvents = await EventsAPI.getEventsByLocation(
            selectedLocation.id,
          );
          setEvents(filteredEvents);
        }
      } catch (error) {
        console.error("Error fetching location events:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="location-events">
      <header className="location-header">
        <h2>{locationName}</h2>
      </header>

      <main className="events-container">
        {events && events.length > 0 ? (
          events.map((event) => <Event key={event.id} event={event} />)
        ) : (
          <div className="no-events">
            <h2>
              <i className="fa-regular fa-calendar-xmark fa-shake"></i>
              No events scheduled at {locationName} yet!
            </h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
