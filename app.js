var express = require('express');
var mongoose = require('mongoose')
var app = express();
var path = require('path');

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, function(err){
    if(err) return console.log(err);
    console.log("DB connection is open");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('list');
});

app.get('/details', function(req, res){
    res.render('details', {
        BlackMirror: {
            title: 'Hidden Figures',

        }
    });

});

app.get('/Library', function(req, res){
    res.render('Library', {
        Actor: {
            name: 'The Help'
        }
    });
});


app.listen(3030, function(){
    console.log('Server running');
});
