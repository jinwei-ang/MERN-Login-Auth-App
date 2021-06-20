require('dotenv').config();

module.exports = {
    mongoURI: process.env.LOCAL_MONGO_URI,
    secretOrKey: "secret"
};