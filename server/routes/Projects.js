const express = require('express')

const router = express.Router()

const {Project} = require('../models/schema')

router.get('/projects', async (req, res) => {
    const projects = await Project.query()

    if(!projects) res.json({success: false})

    res.json({
        success: true, 
        info: 'success connect heroku',
        data: projects
    })
})

router.post('/projects', async (req, res) => {
    const body = req.body

    res.json({
        success: true, 
        info: 'connect to heroku and post data',
    })
})




module.exports = router