const express = require('express');
const router = express.Router();

const { getAllTasks } = require('../controller/tasks-controller');

router.route('/').get((req, res) => {
    res.send('All Items');
});

router.route('/').get(getAllTasks);

module.exports = router;