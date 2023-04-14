const db = require('../models')

//create
const Nomination = db.nominations
const Subscriber = db.subscribers
const Voting = db.votings

// main work

// 1.  create product

const addVoting = async (req, res) => {

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

    const voting = await Voting.create(info)
    res.status(200).send(voting)
    console.log(voting)

}

// 2. get all nominations

const getVotings = async (req, res)  => {
    let votings = await Voting.findAll({
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
    res.status(200).send(votings)

}

// 3. get single nomination

const getSingleVoting = async (req, res)  => {

    let id = req.params.id
    let voting = await Voting.findOne({ where: { id: id} })
    res.status(200).send(voting)

}


// 4. get update nomination

const UpdateVoting = async (req, res)  => {

    let id = req.params.id
    const voting = await Voting.update( req.body, { where: { id: id}})

    res.status(200).send(voting)

}

// 5. Deleting Voting

const deleteVoting = async (req, res)  => {

    let id = req.params.id
    await Voting.destroy({ where: { id: id}})

    res.status(200).send('Voting is deleted')

}

const getHasVoted = async (req, res)  => {

    let id = req.params.id
    let voting = await Voting.findOne({ where: { subscriberID: id} })
    res.status(200).send(voting)

}



module.exports = {
    addVoting,
    getVotings,
    getSingleVoting,
    UpdateVoting,
    deleteVoting,
    getHasVoted

}


  