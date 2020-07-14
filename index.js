import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000

// arrow function
const handleListening = () => console.log('Listening on: http://localhoast:4000');

const handleHome = (req, res) => res.send("Hi from home");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend:true }));
app.use(helmet());
app.use(morgan("tiny"));

app.get('/', handleHome);


app.listen(PORT, handleListening);