

const getTask = (req, res) => {
    res.send('Get a task.');
}

const getAllTasks = (req, res) => {
    res.send('Get all tasks.');
};

const createTask = (req, res) => {
    res.send('Create Task.');
};

const updateTask = (req, res) => {
    res.send('Update Task.');
};

const deleteTask = (req, res) => {
    res.send('Delete Task.');
};

module.exports = {
    getTask,
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};