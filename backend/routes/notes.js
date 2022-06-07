var express = require('express');
var router = express.Router();
const mysql = require("mysql2");
const { nanoid } = require('nanoid');

// get all notes from user
router.get("/:userId", function (req, res) {

    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }

        let sql = "SELECT * FROM notes WHERE author IN ('"+ req.params.userId +"')"

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }

            res.json(result)
        })
    })
})

// delete a note with nanoid key _id
router.delete("/:noteId", function (req, res) {
 
     req.app.locals.con.connect(function (err) {
         if (err) {
             console.log(err);
         }
 
         let sql = "DELETE FROM notes WHERE _id='"+ req.params.noteId +"'";
 
         req.app.locals.con.query(sql, function (err, result) {
             if (err) {
                 console.log(err);
             }
 
             res.json(result)
         })
     })
 })

 // post a note
router.post("/", function (req, res) {
 
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        let newPost = {_id: nanoid(), ...req.body}

        let sql = "INSERT INTO notes (_id, title, text, author) VALUES ('"+ newPost._id +"','"+ newPost.title +"','"+ newPost.text +"','"+ newPost.author +"')";

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }

            res.json(result)
        })
    })
})

 // update a note
 router.post("/update", function (req, res) {
 
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        let newPost = {...req.body}

        let sql = "UPDATE notes SET text='"+ newPost.text +"' WHERE _id='"+ newPost._id +"'";

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }

            res.json(result)
        })
    })
})

module.exports = router;
