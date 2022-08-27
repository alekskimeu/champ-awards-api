import Contestant from '../models/contestant.js'

// Fetch all contestants
export const fetchContestants = async (req, res) => {
    try {
        const contestants = await Contestant.find().sort({  votes: -1 });
        res.status(200).json(contestants);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Fetch a single contestant
export const fetchContestant = async (req, res) => {
    try {
        const contestant = await Contestant.findById(req.params.id);
        res.status(200).json(contestant);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Create contestant
export const createContestant = async (req, res) => {
    const newContestant = new Contestant(req.body)
    try {
        const contestant = await newContestant.save();
        res.status(200).json(contestant);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Update contestant
export const updateContestant = async (req, res) => {
    try {
        const contestant = await Contestant.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(contestant);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Delete contestant
export const deleteContestant = async (req, res) => {
    try {
        const contestant = await Contestant.findByIdAndDelete(req.params.id);
        res.status(200).json("Contestant deleted successfully");
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Increment contestant votes
export const incrementVotes = async (req, res) => {
    try {
        await Contestant.findByIdAndUpdate(req.params.contestantId, {
            $inc: { votes: 1 }
        });
        res.status(200).json("Voted successfully");
    } catch (error) {
        res.status(500).json(error.message)
    }
}