const express = require('express');
const app = express();
const { resolve } = require('path')

app.use('/', express.static(
    resolve(
        __dirname,
        './build'
    )
))

const port = 3000 || process.env.PORT;

app.listen(port, erro => {
    erro ? console.log(erro) : console.log('Server is run!');
})