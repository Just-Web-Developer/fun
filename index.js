const express = require('express')
const app = express()
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    console.log('fgdgdf')
    res.sendFile( __dirname + '/static/index.html');
})

app.get('/targets', function(req, res) {
    res.send(JSON.stringify(
        {
            targets:['https://fsb.ru', 'https://ria.ru/']
        }
    ))
})

app.use(express.static(__dirname + '/static'));

app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});