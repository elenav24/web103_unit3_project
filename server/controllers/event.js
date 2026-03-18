import { pool } from '../config/database.js'

export const getEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events')
        res.json(result.rows)
    } catch (err) {
        console.error('Error fetching events:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const getEventsByLocation = async (req, res) => {
    const locationId = req.params.locationId
    try {
        const result = await pool.query('SELECT * FROM events WHERE locationId = $1', [locationId])
        res.json(result.rows)
    } catch (err) {
        console.error('Error fetching events by location:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const getLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations')
        res.json(result.rows)
    } catch (err) {
        console.error('Error fetching locations:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default {
    getEvents,
    getEventsByLocation,
    getLocations
}