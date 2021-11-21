const mongoose = require("mongoose");

const connectDB = (url) => {
    return mongoose.connect(url, connnectionString);
}

module.export = connectDB;