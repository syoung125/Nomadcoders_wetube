import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
const app = express();

const handleHome = (req, res) => res.send("Hi from home");
const handleProfile = (req, res) => res.send("Hi from profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend:true }));
app.use(helmet());
app.use(morgan("tiny"));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.use('/user', userRouter)

export default app;
// 누군가가 내 파일을 import할때 app object를 주겠다는 의미