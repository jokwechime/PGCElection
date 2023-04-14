const db = require('../models')

//create
const Nomination = db.nominations
const Subscriber = db.subscribers
const Position = db.positions


// main work

// 1.  create product

const addPositions = async (req, res) => {

    let info = {
        PositionName: req.body.PositionName,
        ForResidentsOnly: req.body.ForResidentsOnly
        
    }

    const position = await Position.create(info)
    res.status(200).send(position)
    console.log(position)

}

// 2. get all Subscribers

const getPositions = async (req, res)  => {
    let positions = await Position.findAll({
        
    })
    res.status(200).send(positions)

}

// 3. get single positions

const getSinglePosition = async (req, res)  => {

    let id = req.params.id
    let position = await Position.findOne({ where: { id: id} })
    res.status(200).send(position)

}

// 3A. get Resident Positions

const getAllPositionsResidents = async (req, res)  => {

    let positions = await Position.findAll({ where: { ForResidentsOnly: true} })
    res.status(200).send(positions)

}


// 4. get update nomination

const UpdatePosition = async (req, res)  => {

    let id = req.params.id
    const position = await Position.update( req.body, { where: { id: id}})

    res.status(200).send(position)

}

// 5. get update position

const deletePosition = async (req, res)  => {

    let id = req.params.id
    await Position.destroy({ where: { id: id}})

    res.status(200).send('Position is deleted')

}


module.exports = {
    addPositions,
    getPositions,
    getSinglePosition,
    getAllPositionsResidents,
    UpdatePosition,
    deletePosition

}


  