// Import required modules
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

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

// Set dummy email
app.use('/api/:all', (req, res, next) => {
    req.user = { email: "b121046@iiit-bh.ac.in" };
    next();
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

// Images
app.use(`/images`, express.static("images"));

// Frontend site
const rootPath = __dirname.substring(0, __dirname.length - 8);
app.use(express.static(rootPath + '/frontend/build'));
app.get('*', (req, res) => res.sendFile(rootPath + '/frontend/build/index.html'));

// Start server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
