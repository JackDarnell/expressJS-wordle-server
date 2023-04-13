const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9000;

app.use(cors());

var wordList = ['hello', 'world', 'goody', 'cruel', 'notes', 'quest'];

app.get('/newWord', cors(), (req, res) => res.json({ secret : wordList[Math.floor(Math.random() * wordList.length)].toUpperCase() }));

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);