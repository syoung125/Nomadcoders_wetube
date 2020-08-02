import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//.env파일 안의 정보를 불러올 수 있음

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("** Connected to DB");
const handleError = error => console.log(`** Error on DB Connection: ${error}`);
db.once("open", handleOpen);
db.on('error', handleError);
