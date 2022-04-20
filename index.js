const express = require('express');
const app = express();
const port =process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Hello from my own Smarty Pant !!')
})

const users = [
    {id:1, name :'Sabana', email:'sabana@gmail.com', phone:'0178886888'},
    {id:2, name :'sabnur', email:'sabnur@gmail.com', phone:'0178888878'},
    {id:3, name :'suchorita', email:'suchorita@gmail.com', phone:'0178788888'},
    {id:4, name :'sraboni', email:'sraboni@gmail.com', phone:'0178888888'},
    {id:5, name :'suborna', email:'suborna@gmail.com', phone:'0178888888'},
    {id:6, name :'srabonti', email:'srabonti@gmail.com', phone:'0178788888'},
    {id:7, name :'sabila', email:'sabila@gmail.com', phone:'0178888988'},
]


app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.listen(port,()=>{
    console.log('Listening my port',port);
})
