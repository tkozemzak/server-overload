const express = require('express')
const bodyParser = require('body-parser');
const knex = require('./knex.js')
require('dotenv').config() 

const app = express()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
console.log("Listening on 3001");
})

app.post("/users", (req, res) => {
    knex('users').insert({
        name: req.body.name,
        email: req.body.email
    }).then(()=> {
        res.sendStatus(200)
    })
    console.log(`Receiving request: ${JSON.stringify(req.body)}`);

    res.sendStatus(200)
})