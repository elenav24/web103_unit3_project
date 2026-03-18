import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import { useNavigate } from 'react-router-dom';
import berryImg from '../assets/berrybittycity.jpg'
import '../css/Locations.css'

const Locations = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([])
    const [venueNames, setVenueNames] = useState({venue1: '', venue2: '', venue3: '', venue4: '', venue5: '', venue6: ''})
    const [hoveredVenue, setHoveredVenue] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await EventsAPI.getLocations()
                setLocations(locationsData)

                setVenueNames({
                    venue1: locationsData[0]?.name || 'Venue 1',
                    venue2: locationsData[1]?.name || 'Venue 2',
                    venue3: locationsData[2]?.name || 'Venue 3',
                    venue4: locationsData[3]?.name || 'Venue 4',
                    venue5: locationsData[4]?.name || 'Venue 5',
                    venue6: locationsData[5]?.name || 'Venue 6'
                })
            }
            catch (error) {
                console.error("Error fetching locations:", error)
            }
        })()
    }, [])

    const handleLocationClick = (id) => {
        navigate(`/location/${id}`);
    };

    return (
        <div className='available-locations'>
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <div 
                    key={num} 
                    id={`venue${num}button`} 
                    className={`venue${num}-button-overlay`} 
                    style={{ 
                        opacity: hoveredVenue === `venue${num}` ? 1 : 0,
                        transition: 'opacity 0.2s ease',
                        pointerEvents: 'none'
                    }}
                >
                    <button>{venueNames[`venue${num}`]}</button>
                </div>
            ))}

            <svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1886 1056"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: '100%', height: 'auto' }}
            >
                <image id="background" href={berryImg} width="1886" height="1056" />
                
                    <polygon id="venue1" 
                        points="383,348 310,396 240,461 187,503 177,588 303,621 613,628 625,586 531,440 458,360"
                        onClick={() => handleLocationClick(1)}
                        onMouseEnter={() => setHoveredVenue('venue1')}
                        onMouseLeave={() => setHoveredVenue(null)}
                        fill="transparent" 
                    />
                
                    <polygon id="venue2" 
                        points="493,142 751,142 751,378 493,378"
                        onClick={() => handleLocationClick(2)}
                        onMouseEnter={() => setHoveredVenue('venue2')}
                        onMouseLeave={() => setHoveredVenue(null)}
                        fill="transparent" 
                    />
                
                    <polygon id="venue3" 
                        points="926,202 811,321 763,411 715,420 710,560 1188,580 1173,471 1100,378 1078,291 1020,212"
                        onClick={() => handleLocationClick(3)}
                        onMouseEnter={() => setHoveredVenue('venue3')}
                        onMouseLeave={() => setHoveredVenue(null)}
                        fill="transparent" 
                    />

                    <polygon id="venue4" 
                        points="1235,178 1135,218 1121,293 1131,371 1186,393 1335,391 1335,253"
                        onClick={() => handleLocationClick(4)}
                        onMouseEnter={() => setHoveredVenue('venue4')}
                        onMouseLeave={() => setHoveredVenue(null)}
                        fill="transparent" 
                    />

                    <polygon id="venue5" 
                        points="1516,202 1413,260 1361,350 1356,446 1441,463 1534,450 1683,445 1656,348"
                        onClick={() => handleLocationClick(5)}
                        onMouseEnter={() => setHoveredVenue('venue5')}
                        onMouseLeave={() => setHoveredVenue(null)}
                        fill="transparent" 
                    />

                    <polygon id="venue6" 
                        points="1521,458 1441,478 1408,530 1371,583 1331,670 1255,720 1228,813 1330,849 1473,859 1759,836 1721,695 1681,558 1623,485"
                        onClick={() => handleLocationClick(6)}
                        onMouseEnter={() => setHoveredVenue('venue6')}
                        onMouseLeave={() => setHoveredVenue(null)}
                        fill="transparent" 
                    />
            </svg>
        </div>
    )
}

export default Locations