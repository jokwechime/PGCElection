const db = require('../models')

//create
const Nomination = db.nominations
const Subscriber = db.subscribers

// main work

// 1.  create product

const addSubscriber = async (req, res) => {

    let info = {
        subscriberName: req.body.subscriberName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
        resident: req.body.resident
        
    }

    const subscriber = await Subscriber.create(info)
    res.status(200).send(subscriber)
    console.log(product)

}

// 2. get all Subscribers

const getSubscribers = async (req, res)  => {
    let subscribers = await Subscriber.findAll({
        
    })
    res.status(200).send(subscribers)

}

// 3. get single nomination

const getSingleSubscriber = async (req, res)  => {

    let id = req.params.id
    let subscriber = await Subscriber.findOne({ where: { id: id} })
    res.status(200).send(subscriber)

}

// 3A. get Resident Subscribers

const getAllSubscriberResidents = async (req, res)  => {

    let subscribers = await Subscriber.findAll({ where: { resident: true} })
    res.status(200).send(subscribers)

}


// 4. get update nomination

const UpdateSubscriber = async (req, res)  => {

    let id = req.params.id
    const subscriber = await Subscriber.update( req.body, { where: { id: id}})

    res.status(200).send(subscriber)

}

// 5. get update nomination

const deleteSubscriber = async (req, res)  => {

    let id = req.params.id
    await Subscriber.destroy({ where: { id: id}})

    res.status(200).send('Subscriber is deleted')

}


module.exports = {
    addSubscriber,
    getSubscribers,
    getSingleSubscriber,
    getAllSubscriberResidents,
    UpdateSubscriber,
    deleteSubscriber

}


  