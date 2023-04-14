const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localhost:4200'
}

// middlewares

app.use(cors(corOptions))

app.use(express.static(__dirname + '/dist/pgcelection'))
app.get('/*', function(req, res) {res.send(path.join(__dirname+ '/dist/pgcelection'))})

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

// routers   (bring in all routers here)

const router = require('./routes/nominationRouter.js')
app.use('/api/nominations', router)

const router01 = require('./routes/subscriberRouter.js')
app.use('/api/subscribers', router01)

const router02 = require('./routes/positionRouter.js')
app.use('/api/subscribers', router02)

const router03 = require('./routes/votersListRouter.js')
app.use('/api/votersLists', router03)

const router04 = require('./routes/votingRouter.js')
app.use('/api/votings', router04)





//test

app.get('/', (req, res) => {
    res.json({message: 'hello from api'})
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})