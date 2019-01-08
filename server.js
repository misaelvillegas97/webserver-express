const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'));

// Express HeadBars engine 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'david misael villegas sandoval'
    });
});

app.get('/about', (req, res) => {
    
    res.render('about');
});

app.get('/data', function (req, res) {
    res.send('Hola data');
});
 
app.listen(port, () => {
    console.log(`PORT ${port}`);
});