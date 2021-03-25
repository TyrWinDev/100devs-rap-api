const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 27,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age': 28,
        'birthName': 'dylan',
        'birthLocation': 'dylan'
    },
    'dr dre':{
        'age': 56,
        'birthName': 'Andre Romelle Young',
        'birthLocation': 'Compton, California'
    },
    'ice cube':{
        'age': 51,
        'birthName': "O'Shea Jackson",
        'birthLocation': 'Los Angeles, California'
    },
    'kurtis blow':{
        'age': 61,
        'birthName': 'Kurtis Walker',
        'birthLocation': 'New York City'
    },
    'tupac shakur':{
        'age': 25,
        'birthName': 'Lesane Parish Crooks',
        'birthLocation': 'Las Vegas, Nevada'
    },
    'the notorious b.i.g':{
        'age': 24,
        'birthName': 'Christopher George Latore Wallace',
        'birthLocation': 'Brooklyn, New York City'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response)=>{
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['dylan'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})