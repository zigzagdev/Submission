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

app.listen(3003, () => {
    console.log("Yey, your server is running on port 3003");

    app.post("/Form", (req, res) => {
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email
        const opinion = req.body.opinion

        db.query(
            "INSERT INTO user (name, email, password, opinion) VALUES (?, ?, ?, ?)",
            [name, email, password, opinion],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
            }
        );
    });

    app.get("/", (req, res) => {
        db.query("SELECT * FROM user", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    });

    app.get("/:id", (req, res) => {
        const id = req.params.id;
        const q = "SELECT * FROM user WHERE id = ?";
        db.query(q, [id], (err, result) => {
            if (err) {
            } else {
                res.send(result);
            }
        });
    });

    app.put("/update/:id", (req, res) => {
        const values = [
            req.body.name,
            req.body.email,
            req.body.opinion
        ];
        const id = req.params.id
        const q = "UPDATE user SET name = ?, email = ?, opinion = ? WHERE id = ?";

        db.query(q, [...values, id],
            (err, result) => {
                if (err) {
                } else {
                    res.send(result);
                }
            }
        );
    });

    app.delete("/:id", (req, res) => {
        const id = req.params.id;
        const q = "DELETE FROM user WHERE id = ?";
        db.query(q, id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    });
});
