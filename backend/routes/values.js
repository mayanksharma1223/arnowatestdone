const express = require('express');
const Value = require('../models/Value')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')

//ROUTE:1
router.get('/fetchallvalues', fetchuser, async (req, res) => {
    try {
        const values = await Value.find({ user: req.user.id })
        res.json(values)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//ROUTE:2 
router.post('/addvalue', fetchuser, [
    body('india'),
    body('oman'),
    body('us'),
    body('growth'),
    body('loss'),
],
    async (req, res) => {
        try {
            const { india, oman, us, growth,loss } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const value = new Value({
                india, oman, us, growth,loss , user: req.user.id
            })
            const savedData = await value.save()

            res.json(savedData)
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

//ROUTE:3  
router.delete('/deletevalue/:id', fetchuser,
    async (req, res) => {
        try {
            let value = await Value.findById(req.params.id);
            if (!value) { return res.status(404).send('not found') }


            if (data.user.toString() !== req.user.id) {
                return res.status(401).send("not allowed")
            }
            data = await Value.findByIdAndDelete(req.params.id)
            res.json({ "success": "values has been deleted", value: value });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error");
        }
    })




module.exports = router;