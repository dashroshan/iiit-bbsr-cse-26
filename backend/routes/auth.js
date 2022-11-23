const express = require("express");
const passport = require("passport");
const router = express.Router();
const blocked = require('../blocked');

// To be used as the login button link
router.get(
    "/signin",
    passport.authenticate(
        "google",
        {
            hd: "iiit-bh.ac.in",
            prompt: "select_account",
            scope: ["profile", "email"]
        }
    )
);

// Send get request to logout
router.get(
    "/signout",
    (req, res) => {
        req.logout();
        res.redirect(process.env.FRONTEND);
    }
);

// Send get request to check if user is logged in
router.get(
    "/check",
    (req, res) => {
        if (!req.isAuthenticated()) {
            res.send({ isLoggedIn: false });
            return;
        }
        const email = req.user.email;
        const bUpg = [
            "b221021@iiit-bh.ac.in",
            "b321031@iiit-bh.ac.in",
            "b521002@iiit-bh.ac.in",
            "b421054@iiit-bh.ac.in",
            "b221029@iiit-bh.ac.in",
            "b421037@iiit-bh.ac.in",
        ];
        let userData = {};
        userData.hasProfile = ((email[1] === "1" || bUpg.includes(email)) && ((email.substr(2, 2) === "22") || (email.substr(2, 2) === "21")));
        userData.id = email.substr(0, 7);
        if (email.substr(2, 2) === "22") userData.year = 1;
        else if (email.substr(2, 2) === "21") userData.year = 2;
        if (blocked[req.user.email]) userData.blocked = blocked[req.user.email].login;
        res.send({ isLoggedIn: true, ...userData });
    }
);

// For google redirection handling
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: `${process.env.FRONTEND}?loginFailed=true` }),
    (req, res) => {
        res.redirect(process.env.FRONTEND);
    }
);

module.exports = router;