let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');
let path = require('path');

let userdetails = require('./config/db');


let app = express();

mongoose.connect(userdetails.dburl,{useNewUrlParser : true, useUnifiedTopology : true},(err,success)=>{
    if(err){
        console.log('error occured');
        console.log(err);
    }
    else{
        console.log('db connected');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(cors());


app.use('/',require('./router/employee'));
app.use('/',require('./router/product'));


app.listen(userdetails.port,(err,success)=>{
    if(err) 
    throw err;
    else console.log('server is running in port 8080');
});

