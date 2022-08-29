import express from 'express'
import {
    createContestant, 
    fetchContestant, 
    fetchContestants, 
    updateContestant, 
    deleteContestant, 
    incrementVotes
} from '../controllers/contestant.js'

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", fetchContestants);
router.post("/", auth, createContestant);
router.get('/:id', fetchContestant);
router.put("/:id", auth, updateContestant);
router.put("/polls/:contestantId", incrementVotes);
router.delete("/:id", auth, deleteContestant);


export default router