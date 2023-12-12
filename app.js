const express = require('express');
const Database = require('./database-migrations.js');
const server = express();

server.use(express.json());

Database.init();

server.get('/users', async (req,res) => {
    const data = await database.getUsers();
    return res.status(200).json(data);
});


server.get('/user_links', async (req,res) => {
    const data = await database.getUser_links();
    return res.status(200).json(data);
});


server.post('/users', async (req,res) => {
    console.log(req.body);
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
       
        
        
    };

     const existingUser = await database.getUserByEmail(userData.email);
     if (existingUser) {
        return res.status(400).json({message:'User already exists with email'});
    
     };
    


    const response = await database.insertUser(userData)
    return res.status(200).json(response);
    
});
 


server.post('/User_links', async (req,res) => {
    console.log(req.body);
    const userData = {
        userid: req.body.userid,
        url: req.body.url,
        type: req.body.type,
        created_at: req.body.created_at

    };

    const existingID = await database.getUserByID(userData.id);
    if (existingID) {
        return res.status(400).json({message:'User already exists with id'});

    };


    const response = await database.İnterUser_links(userData)
    return res.status(200).json(response);
});





server.listen(3000, () => {
    console.log("istekler dinleniyor");
});
