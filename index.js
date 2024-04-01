const express=require('express');
const sequelize=require('./sequelize');
const Todo=require('./todo');
const app=express();
sequelize.authenticate().then(()=>{
    console.log( "Database is connected");
    return sequelize.sync({alter:true});
}).then(()=>{
    console.log("all model are sync");
}).catch((error)=> {
    console.error("unable to fetch");
})
app.use(express.json());
app.get('/todo',(req,res)=>{
    Todo.findAll().then((todo)=>{
        res.json(todo);
    })
.catch((error)=>{
    res.status(500).json("unable")})
})
app.post( '/todo', async ( req , res ) =>{
    const {description}=req.body;
    try{
    const t=await Todo.create({description});
res.json(t)}
    catch(error){
        res.json(error);
    }
    // Todo.create({description}).then((todo)=>{
    //     res.status(201).json(todo);
    // }).catch((error)=>{
    //     res.status(400);
    // })
})
app.listen('3000',()=>{
    console.log("run");
}) 