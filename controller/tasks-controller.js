const Task = require('../models/TaskModel');

const getTask = async (req, res) => {
  try {
    let requestParams = req.params;
    const task = await Task.findOne({ _id: requestParams.id });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${requestParams.id}` });
    }

    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getAllTasks = async (req, res) => {
  try {
    let request = req.body;
    const tasks = await Task.find(request);

    res.status(201).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    let request = req.body;
    const task = await Task.create(request);

    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ mgs: err });
  }
  
  res.status(201).json(task);
};

const updateTask = (req, res) => {
  res.send("Update Task.");
};

const deleteTask = (req, res) => {
  res.send("Delete Task.");
};

module.exports = {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
