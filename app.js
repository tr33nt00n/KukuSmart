const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const routes = require('./routes');

const app = express(); 


app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use('/', routes); 


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('partials', __dirname + '/views/partials');
app.set('head', 'partials/head');
app.set('footer', 'partials/footer');
app.set('header', 'partials/header');



app.listen(process.env.PORT || 3000); 