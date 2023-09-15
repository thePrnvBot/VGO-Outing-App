const Outing = require("../models/outingModel")

const { mongoose } = require("mongoose")

const getOutings = async (req, res) => {
    const outings = await Outing.find({}).sort({createdAt: -1})

    res.status(200).json(outings)
}

const getOuting = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : 'No such outing'})
    }

    const outing = await Outing.findById(id)

    if (!outing) {
        return res.status(404).json({error : 'No such outing'})
    }

    res.status(200).json(outing)
}

const createOuting = async (req, res) => {
    const { leaveType, visitingPlace, reason, fromDate, fromTime, toDate, toTime } = req.body

    try {
        const outing = await Outing.create({
            leaveType, 
            visitingPlace, 
            reason, 
            fromDate, 
            fromTime, 
            toDate, 
            toTime
        })
        res.status(200).json(outing)
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 

    //res.json({msg : 'POST an Outing Detail'})
}

const deleteOuting = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error : 'No such outing'})
    }

    const outing = await Outing.findOneAndDelete({_id : id})

    if (!outing) {
        return res.status(400).json({error : 'No such outing'})
    }

    res.status(200).json(outing)
}

const updateOuting = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error : 'No such outing'})
    }

    const outing = await Outing.findByIdAndUpdate({_id : id}, {
        ...req.body
    })

    if (!outing) {
        return res.status(400).json({error : 'No such outing'})
    }

    res.status(200).json(outing)
}

module.exports = {
    getOuting,
    getOutings,
    createOuting,
    deleteOuting,
    updateOuting
}