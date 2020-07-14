import express from "express";

export const userRouter = express.Router();
// default로 export하지 않았으므로 import시 { }로 써야함

userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));

