var express = require('express');
var app = express();
var bodyParser = require('body-parser')

//set view engine
app.set("view engine","pug")
app.use('/static', express.static('static'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.render('signUp', { title: 'Hey', message: 'Hello there!' })
})
app.post('/signup', function (req, res) {
    if(req.body.subscribe){
        res.render('sucess', { title: 'Hey', message: 'Hello ' + req.body.fname  +" " + req.body.lname ,
        message1:" Thank you for signing up. Your account is now created.",
        message2:" You would be receiving our periodic newsletter to your email:  "+ req.body.email })
    }else {
        res.render('sucess', { title: 'Hey', message: 'Hello ' + req.body.fname  +" " + req.body.lname ,
        message1:" Thank you for signing up. Your account is now created."})
    }

    
})
var server = app.listen(3000, function () {
    console.log('Node server is running..');
});

