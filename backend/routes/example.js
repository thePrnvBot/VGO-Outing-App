import express from "express"

const router = express.Router()

//Debug Route
//router.route("/").get((req, res) => res.send("Hello World!"))
router.get('/', (req, res) => {
    res.json({msg : 'GET All Outing Details'})
}) 

router.get('/:id', (req, res) => {
    res.json({msg : 'GET a specific Outing Detail'})
}) 

router.post('/:id', (req, res) => {
    res.json({msg : 'POST an Outing Detail'})
}) 

router.delete('/:id', (req, res) => {
    res.json({msg : 'DELETE an Outing Detail'})
}) 

router.patch('/:id', (req, res) => {
    res.json({msg : 'PATCH an Outing Detail'})
}) 

export default router