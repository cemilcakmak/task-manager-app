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


const updateTask = async (req, res) => {
  try {
    let requestParams = req.params;
    let requestBody = req.body;
    const task = await Task.findOneAndUpdate({_id: requestParams.id},requestBody);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${requestParams.id}` });
    }

    res.status(200).json({ id: requestParams.id, data: requestBody });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};


const deleteTask = async (req, res) => {
  try {
    let requestParams = req.params;
    const task = await Task.findOneAndDelete({ _id: requestParams.id });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${requestParams.id}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};


module.exports = {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
