const express = require ('express');
const router = express.Router();

const Task = require('../models/Task');


router.get('/',  async function(req, res){
    const tasks = await Task.find();
    res.json(tasks);

});

router.post('/', async function(req, res){
    const task = new Task (req.body);
    await task.save();
    res.json({
        status: 'Task Saved'
    });

});

router.put('/:id', async function(req, res){
    await Task.findByIdAndUpdate (req.params.id, req.body);
    res.json({
        status: 'Task Update'
    });
} );

router.delete('/:id', async function(req, res){
    await Task.findByIdAndRemove (req.params.id);
    res.json({
        status: 'Task delete'
    });
} );


module.exports = router;