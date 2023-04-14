const positionController = require('../controllers/positionController.js')

const router = require('express').Router()

router.post('/addPositions', positionController.addPositions)

router.get('/getPositions', positionController.getPositions)

router.get('/getAllPositionsResidents', positionController.getAllPositionsResidents)


router.get('/:id', positionController.getSinglePosition)

router.put('/:id', positionController.UpdatePosition)

router.delete('/:id', positionController.deletePosition)

module.exports = router