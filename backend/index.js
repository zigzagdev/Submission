


const express = require("express");
const app = express();



const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 'root',
    user : 'root',
    database: 'submission'
});

app.get("/", function(req, res) {
    res.json("test clear !");
});

app.listen(4000, function() {
    console.log("Example app listening on port 4000!");
});