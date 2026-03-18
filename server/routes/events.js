import express from 'express'
import EventController from '../controllers/event.js'

const router = express.Router()

router.get('/events', EventController.getEvents)              // GET /api/events
router.get('/locations', EventController.getLocations)        // GET /api/locations
router.get('/events/:locationId', EventController.getEventsByLocation) // GET /api/events/1

export default router