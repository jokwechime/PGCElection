const votersListController = require('../controllers/votersListController.js')

const router = require('express').Router()

//router.post('/addPositions', positionController.addPositions)

router.get('/getAllNominees', votersListController.getAllNominees)

router.get('/getAllNomineesbyPosition/:position', votersListController.getAllNomineesbyPosition)

/*


router.get('/:id', positionController.getSinglePosition)

router.put('/:id', positionController.UpdatePosition)

router.delete('/:id', positionController.deletePosition)  
*/

module.exports = router