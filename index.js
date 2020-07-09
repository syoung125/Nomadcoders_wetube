const express = require("express");
const app = express();

const PORT = 4000

function handleListening(){
    console.log('Listening on: http://localhoast:4000');
}
function handleHome(req, res){
    res.send('Hi from home!!');
}

app.get('/', handleHome);

app.listen(PORT, handleListening);