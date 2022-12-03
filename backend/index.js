// Import required modules
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const blocked = require('./blocked');

// Initialize express app
var app = express();

// Load env and set PORT
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Passport config
require('./config/passport')(passport);

// Middleware
app.use(cors({ credentials: true, origin: process.env.FRONTEND }));
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'IIIT BBSR CSE26',
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Check authentication for user endpoints
app.use('/api/user/:all', (req, res, next) => {
    const bUpg = [
        "b221021@iiit-bh.ac.in",
        "b321031@iiit-bh.ac.in",
        "b521002@iiit-bh.ac.in",
        "b421054@iiit-bh.ac.in",
        "b221029@iiit-bh.ac.in",
        "b421037@iiit-bh.ac.in",
    ];
    if (req.isAuthenticated()) {
        const email = req.user.email;
        const hasProfile = ((email[1] === "1" || bUpg.includes(email)) && ((email.substr(2, 2) === "22") || (email.substr(2, 2) === "21")));
        if (hasProfile) next();
        else res.sendStatus(401);
    }
    else res.sendStatus(401);
})

// Check authentication for data endpoints
app.use('/api/data/:all', (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.sendStatus(401);
})

// Block profile edits access XD
app.use('/api/user/:qPath', (req, res, next) => {
    if ((req.params.qPath === "image" || req.params.qPath === "setAbout") && blocked[req.user.email]) res.send({ blocked: blocked[req.user.email].edit });
    else next();
})

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/data', require('./routes/data'));

// Images
app.use(`/images`, express.static("images"));

// Frontend site
const rootPath = __dirname.substring(0, __dirname.length - 8);
app.use(express.static(rootPath + '/frontend/build'));
app.get('*', (req, res) => res.sendFile(rootPath + '/frontend/build/index.html'));

// Start server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
