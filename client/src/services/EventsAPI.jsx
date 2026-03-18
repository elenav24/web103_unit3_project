const getEvents = async () => {
    try {
        const response = await fetch('/api/events')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching events:', error)
    }
}

const getEventsByLocation = async (locationId) => {
    try {
        const response = await fetch(`/api/events/${locationId}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching events by location:', error)
    }
}

const getLocations = async () => {
    try {
        const response = await fetch('/api/locations')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching locations:', error)
    }
}

export default { getEvents, getEventsByLocation, getLocations }