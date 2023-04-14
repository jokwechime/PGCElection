const db = require('../models')

//create
const Nomination = db.nominations
const Subscriber = db.subscribers

// main work

// 1.  create product

const addNomination = async (req, res) => {

    let info = {
        subscriberName: req.body.subscriberName,
        emailAddress: req.body.emailAddress,
        electionYear: req.body.electionYear,
        phoneNumber: req.body.phoneNumber,
        president: req.body.president,
        vicePresident: req.body.vicePresident,
        secretary: req.body.secretary,
        SocialSecretary: req.body.SocialSecretary,
        treasurer: req.body.treasurer,
        subscriberID: req.body.subscriberID,

    }

    const nomination = await Nomination.create(info)
    res.status(200).send(nomination)
    //console.log(nomination)

}

// 2. get all nominations

const getNominations = async (req, res)  => {
    let nominations = await Nomination.findAll({
        attributes: [
            // list only the columns you want if not forget attributes
            'subscriberName',
            'emailAddress',
            'electionYear',
            'phoneNumber',
            /*
            'president',
            'vicePresident',
            'secretary',
            'SocialSecretary',
            'treasurer',
            'subscriberID'
            */

        ]
    })
    res.status(200).send(nominations)

}

// 3. get single nomination

const getSingleNomination = async (req, res)  => {

    let id = req.params.id
    let nomination = await Nomination.findOne({ where: { id: id} })
    res.status(200).send(nomination)

}


// 4. get update nomination

const UpdateNomination = async (req, res)  => {

    let id = req.params.id
    const nomination = await Nomination.update( req.body, { where: { id: id}})

    res.status(200).send(nomination)

}

// 4. get update nomination

const deleteNomination = async (req, res)  => {

    let id = req.params.id
    await Nomination.destroy({ where: { id: id}})

    res.status(200).send('Product is deleted')

}

const getHasNominated = async (req, res)  => {

    let id = req.params.id
    let nomination = await Nomination.findOne({ where: { subscriberID: id} })
    res.status(200).send(nomination)

}


module.exports = {
    addNomination,
    getNominations,
    getSingleNomination,
    UpdateNomination,
    deleteNomination,
    getHasNominated

}


  