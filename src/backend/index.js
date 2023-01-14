const express = require("express");
const app = express();

app.get("/test", function(req, res) {
    res.send("go to /posts to see posts");
});

app.listen(4000, function() {
    console.log("Example app listening on port 4000!");
});