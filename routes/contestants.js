import express from 'express'
import {
    createContestant, 
    fetchContestant, 
    fetchContestants, 
    updateContestant, 
    deleteContestant, 
    incrementVotes
} from '../controllers/contestant.js'

const router = express.Router()

router.get('/', fetchContestants);
router.post('/', createContestant);
router.get('/:id', fetchContestant);
router.put('/:id', updateContestant);
router.put('/polls/:contestantId', incrementVotes);
router.delete('/:id', deleteContestant);


export default router