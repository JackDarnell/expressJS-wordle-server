const express = require('express');
const app = express();
const PORT = 3000;

var wordList = ['hello', 'world', 'goodbye', 'cruel', 'notes', 'quest'];

app.get('/newWord', (req, res) => res.send(wordList[Math.floor(Math.random() * wordList.length)]));

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);