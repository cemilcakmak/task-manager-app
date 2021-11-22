const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        requreid: [true, 'must provide a name'],
        trim: true,
        maxlength: [25, 'name can not be more than 25 characters']
    },
    completed: Boolean,
});

module.exports = mongoose.model('TaskModel', TaskSchema);