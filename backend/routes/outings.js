import express from "express"
const OutingDetail = "../models/outingModel.js"

const router = express.Router()

//Debug Route
//router.route("/").get((req, res) => res.send("Hello World!"))
router.get('/', (req, res) => {
    res.json({msg : 'GET All Outing Details'})
}) 

router.get('/:id', (req, res) => {
    res.json({msg : 'GET a specific Outing Detail'})
}) 

router.post('/', async (req, res) => {
    const { leaveType, visitingPlace, reason, fromDate, fromTime, toDate, toTime } = req.body

    try {
        const outingDetail = await OutingDetail.create({
            leaveType, 
            visitingPlace, 
            reason, 
            fromDate, 
            fromTime, 
            toDate, 
            toTime
        })
        res.status(200).json(outingDetail)
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 

    //res.json({msg : 'POST an Outing Detail'})
}) 

router.delete('/:id', (req, res) => {
    res.json({msg : 'DELETE an Outing Detail'})
}) 

router.patch('/:id', (req, res) => {
    res.json({msg : 'PATCH an Outing Detail'})
}) 

export default router