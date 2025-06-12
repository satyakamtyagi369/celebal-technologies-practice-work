const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const PORT = 3000;

// Middleware or Plugins
app.use(express.urlencoded({extended: false}));
// Routes
app.get('/api/users', (req,res) =>{
    res.json(users);
})
app.get('/users',(req,res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>
    `;
    res.send(html);
})

app.get('/api/users/:id',(req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post('/api/users', (req,res) => {
    const body = req.body;
   // console.log("BODY:", body);
   const newuser = ({id: users.length + 1 , ...body});
   users.push(newuser);
   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users,null,2), (err, data) => {
         if(err) {
            return res.status(500).json({error: "Failed to save user data"});
         }
         else{
            return res.status(201).json({message: "User created successfully", user:body});
         }
   })
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});