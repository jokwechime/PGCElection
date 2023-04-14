const subscriberController = require('../controllers/subscriberController.js')

const router = require('express').Router()

router.post('/addSubscriber', subscriberController.addSubscriber)

router.get('/getSubscribers', subscriberController.getSubscribers)

router.get('/getAllSubscriberResidents', subscriberController.getAllSubscriberResidents)


router.get('/:id', subscriberController.getSingleSubscriber)

router.put('/:id', subscriberController.UpdateSubscriber)

router.delete('/:id', subscriberController.deleteSubscriber)

module.exports = router