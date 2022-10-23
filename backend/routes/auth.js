const express = require("express");
const passport = require("passport");
const router = express.Router();

// To be used as the login button link
router.get(
    "/login",
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
    "/logout",
    (req, res) => {
        req.logout();
        res.redirect(process.env.FRONTEND);
    }
);

// Send get request to check if user is logged in
router.get(
    "/check",
    (req, res) => {
        let email = "none";
        if (req.user) email = req.user.email;
        setTimeout(() => {
            res.send({ isLoggedIn: req.isAuthenticated(), email: email });
        }, 2000);
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