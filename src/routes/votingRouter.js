const votingController = require('../controllers/votingController.js')

const router = require('express').Router()

router.post('/addVoting', votingController.addVoting)

router.get('/getVotings', votingController.getVotings)


router.get('/:id', votingController.getSingleVoting)

router.get('/getHasVoted/:id', votingController.getHasVoted)

router.put('/:id', votingController.UpdateVoting)

router.delete('/:id', votingController.deleteVoting)

module.exports = router