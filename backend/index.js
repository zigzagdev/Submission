const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "react",
});

app.post("/Form", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email
    const opinion = req.body.opinion

    db.query(
        "INSERT INTO user (name, email, password, opinion) VALUES (?, ?, ?, ?)",
        [name, email,  password, opinion],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});
//
// app.get("/", (req, res) => {
//     db.query("SELECT * FROM react", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });
//
// app.put("/update", (req, res) => {
//     const id = req.body.id;
//     const name = req.body.name;
//     const email = req.body.email;
//
//     db.query(
//         "UPDATE react SET name = ?, email = ? WHERE id = ?",
//         [name, id, email],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });
//
// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM react WHERE id = ?", id, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

app.listen(3003, () => {
    console.log("Yey, your server is running on port 3003");
});

app.get("/", (req, res) => {
    res.send('hello world');
});


