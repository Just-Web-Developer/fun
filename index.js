const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile( __dirname + '/static/index.html');
})

app.get('/targets', function(req, res) {
    res.send(JSON.stringify([
        ['fsb.ru']
    ]))
})

app.use(express.static(__dirname + '/static'));

app.listen(3000)