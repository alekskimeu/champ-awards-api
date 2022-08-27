import express from 'express'
import {
    createEvent, 
    fetchEvent, 
    fetchEvents, 
    updateEvent, 
    deleteEvent
} from '../controllers/event.js'

const router = express.Router()

router.get('/', fetchEvents);
router.post('/', createEvent);
router.get('/:id', fetchEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);


export default router