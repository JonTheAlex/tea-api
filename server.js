const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTime': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'uknown',
        'steepTime': 'uknown',
        'caffinated': 'unknown',
        'flavor': 'uknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]){
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
    response.json(tea)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Tea server is running on Port ${PORT}`)
})