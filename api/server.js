import express from "express";
import router from "./routes/index.js";


const port = process.env.PORT ? process.env.PORT : 5000;

const app = express();

app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`express server is live at port ${port}` );
});