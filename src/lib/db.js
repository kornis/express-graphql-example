const mongoose = require('mongoose');

const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_NAME
} = process.env;
    

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('open', () => console.log("DB connection opened..."))
}
