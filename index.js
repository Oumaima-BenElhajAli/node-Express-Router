const express= require('express');
const http= require('http');
const bodyParser= require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const hostname= 'localhost';
const port= 3000;


const app= express();
const morgan= require('morgan');
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(bodyParser.json());

//app.use('/dishes/:dishId', dishRouter);
//with dishId
/*
app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send details of the dishe'
    +req.params.dishId+' to you!!');
});

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation is not supported on /dishes');
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: '+req.params.dishId+' !! \n');
    res.end('will update the dish: '+req.body.name+
    ' with details: '+req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting the dishe: '+req.params.dishId);
});*/

app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1> this is an Express Server </h1></body></html>');
});

const server= http.createServer(app);

server.listen(port, hostname,()=>{
    console.log(`server is running on http://${hostname}:${port}/`);

});