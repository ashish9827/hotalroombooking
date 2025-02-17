const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const routes = require('./routes/index');

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use("/", routes);

app.listen(5000, (req, res) => {
    console.log("server is running on port:5000");
});