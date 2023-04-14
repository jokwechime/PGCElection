const nominationController = require('../controllers/nominationController.js')

const router = require('express').Router()

router.post('/addNomination', nominationController.addNomination)

router.get('/getNominations', nominationController.getNominations)


router.get('/:id', nominationController.getSingleNomination)

router.get('/getHasNominated/:id', nominationController.getHasNominated)

router.put('/:id', nominationController.UpdateNomination)

router.delete('/:id', nominationController.deleteNomination)

module.exports = router