const express = require('express')
const bodyParser = require('body-parser');
const knex = require('./knex.js')
const cors = require('cors')
require('dotenv').config() 

const app = express()
app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
console.log("Listening on 3001");
})

app.get('/users', (req, res) => {
    knex('users').then((results)=> {
        console.log(results)
        res.send(results)
    })
})

app.post("/users", (req, res) => {
    knex('users').insert({
        "name": req.body.name,
        "email": req.body.email
    }).then(()=> {
        res.sendStatus(200)
    })
    console.log(`Receiving request: ${JSON.stringify(req.body)}`);

})

app.patch("/users/:id", (req, res) => {
    knex('users').where({id: req.params.id}).update({
        "name": req.body.name
    }).then(()=> {
        res.sendStatus(200)
    })
    console.log(`Receiving request: ${JSON.stringify(req.body)}`);

})