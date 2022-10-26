const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send ("We're on orders")
})

router.post('/', (req, res) => {
    
})
router.put('/:id', (req, res) => {
    
})
router.delete('/:id', (req, res) => {
    
})

// router.post('/', (req, res) => {
//     console.log(req.body)
// })

module.exports = router