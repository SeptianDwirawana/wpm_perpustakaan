// configurasi awal
const express = require('express');
let app = express();
let path = require('path');
const port = 8000;

//static file
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));
app.use('/images',express.static(__dirname+'public/images'));
app.use('/modules',express.static(__dirname+'/node_modules'));


//View Engine
app.set('views', './views');
app.set('view engine', 'ejs');

//Routing

app.get('/',(req,res) =>{
    const events = [
        {name: "Sumarecon Mall",published: '04 April 2023',price: 150000, status:true},
        {name: "Music",published: '05 April 2023',price: 45000, status:true},
        {name: "Football",published: '01 April 2023',price: 75000, status:false},
    ]
    res.render('index',{
        events: events
    });
});
//Server
app.listen(port,() =>{
    console.log('8000 is magic port');
});
