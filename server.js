// add e parameter to set the file extensions to watch
// nodemon server -e js,hbs,html,css

const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.port || 3000;

console.clear();

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    // res.send('Hello World')
    res.render('home', { name: 'Puto' });
})


app.get('/about', function(req, res) {
    res.render('about');
})

app.get('/json', function(req, res) {
    res.send({ url: req.url, version: req.httpVersion });
})


app.listen(port, () => console.log(`Server listening on port ${port}...`));