const express = require('express');
const app = express();
const { resolve } = require('path')

app.use('/', express.static(
    resolve(
        __dirname,
        './build'
    )
))

const port = process.env.PORT || 3000;

app.listen(port, erro => {
    erro ? console.log(erro) : console.log('Server is run!');
})