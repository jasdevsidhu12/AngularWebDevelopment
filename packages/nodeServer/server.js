console.log('hello world');
'use strict'
const express = require('express');
const port = 8080;
 //App
const app = express();
app.use(express.static('static'));
app.use(express.static('public'));
app.get('/main', function(req, res) {
     res.redirect('/index.html');
 });

 app.get('/*', function(req, res) {
     res.send('Hello world \n');
 });


 app.listen(port);
 console.log('Running on http://localhost:' + port);