
const express = require("express");
const Router = express.Router();
const User = require("../models/users")

Router.get("/", (req, res) => {
    res.render("index")
})

Router.post("/add", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const user = new User({name, email});
    user.save().then(() => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err);
    })
})

// find data 

Router.get("/show", (req, res) => {
    User.find({}).then((docs) => {
        res.render("show", {
            students: docs
        })
    }).catch((err) => {
        console.log(err);
    })
})

// update data
Router.get("/edit/:id", (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body,{new:true}).then((docs) => {
        res.render("edit", {studentData: docs})
    }).catch((err) => {
        console.log("can't update")
    })
})

Router.post("/edit/:id", (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error")
    })
})

// delete data
Router.get("/delete/:id", (req, res) => {
    User.findByIdAndDelete({_id: req.params.id}, req.body).then((docs) => {
        res.redirect("/show")
    }).catch((err) => {
        console.log("error")
    })
})

module.exports = Router;

