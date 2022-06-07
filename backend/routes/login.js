var express = require('express');
var router = express.Router();
const mysql = require("mysql2");

// login user 
router.post("/", function (req, res) {


    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }

        let sql = "SELECT * FROM users"

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }

            for (let i = 0; i < result.length; i++) {
                const user = result[i];

                if (req.body.username === user.username && req.body.password === user.password) {

                    res.json({
                        "status": "loggedIn",
                        "userId": user._id
                    })
                    return

                }
            }

            res.send("bad login")
        })
    })
})

module.exports = router;
