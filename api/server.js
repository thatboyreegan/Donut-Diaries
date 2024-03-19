const express = require('express');

const port = process.env.PORT ? process.env.PORT : 5000;

const app = express();

app.use(express.json());

/**inject the routes in here*/


app.listen(port, (port) => {
    console.log(`express server is live at port ${port}` );
});