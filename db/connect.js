const mongoose = require("mongoose");

//if there is a space between mongodb params, causes an error.
const connnectionString =
  "mongodb+srv://nodejscamp:buzGBDSJuotd39nf@nodeexpressprojects.iatja.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority;";

const connectDB = (url) => {
    return mongoose.connect(connnectionString);
}

module.export = connectDB;