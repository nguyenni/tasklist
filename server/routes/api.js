// reference: https://www.youtube.com/watch?v=PFP0oXNNveg

var express = require('express'); 
var router = express.Router();
var mongojs = require('mongojs'); 
var db = mongojs('mongodb://localhost:27017/tasklist', ['tasks']);

// Get All Tasks
router.get('/tasks', function(req, res, next) {
    db.tasks.find(function(err, tasks) {
        if(err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

// Save Task 
router.post('/task', function(req, res, next) {
    let task = req.body;
    db.tasks.save(task, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});

// Delete Task 
router.delete('/task/:id', function(req, res, next) {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task 
// updating data that is already on the server
router.put('/task/:id', function(req, res, next) {
    let task = req.body;

    var updTask = {};

    if(task.name) {
        updTask.name = task.name;
    }

    if(task.priority) {
        updTask.priority = task.priority;
    }

    if(task.deadline) {
        updTask.deadline = task.deadline;
    }

    if(task.created) {
        updTask.created = task.created;
    }

    if(task.isDone) {
        updTask.isDone = task.isDone;
    }

    db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });

});

module.exports = router; 