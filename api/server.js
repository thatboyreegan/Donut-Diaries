const express = require('express');
const { default: router } = require('./routes');

const port = process.env.PORT ? process.env.PORT : 5000;

const app = express();

app.use(express.json());

app.use(router);


app.listen(port, (port) => {
    console.log(`express server is live at port ${port}` );
});