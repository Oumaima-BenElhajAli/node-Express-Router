const express = require('express');
const bodyParser  = require('body-parser');

const leaderRouter = express.Router();


leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the leaders to you!!');
})
.post((req,res,next)=>{
    res.end('will add the leader: '+req.body.name+
    ' with details : '+req.body.description );
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation is not supported on /leaders');
})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders');
});

leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
    res.end('Will send details of the leader '
    +req.params.leaderId+' to you!!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('Post operation is not supported on /leaders/'+req.params.leaderId);
})
.put((req,res,next)=>{
    res.write('Updating the leader: '+req.params.leaderId+' !! \n');
    res.end('will update the leader: '+req.body.name+
    ' with details: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the leader: '+req.params.leaderId);
});



module.exports = leaderRouter;