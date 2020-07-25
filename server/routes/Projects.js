const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const {Project} = require('../models/schema')

router.get('/all', async (req, res) => {
    const projects = await Project.query()
    if(!projects) res.json({success: false})

    res.json({
        success: true, 
        info: 'success connect heroku',
        data: projects
    })
})

router.post('/submit', async (req, res) => {
    const requestBody = req.body
    const projectBody = {...requestBody, id: uuidv4()}

    console.log(projectBody);

    const result = await Project.query().insert(projectBody)

    res.json({
        success: true, 
        info: 'connect to heroku and post data',
        result :  result
    })
})

router.get('/:slug', async (req, res) => {
    const slug = req.params.slug

    const result = await Project.query().findById(slug)

    res.json({
        success: true, 
        info: `connect to heroku, GET data by id ${slug}` ,
        id: result
    })
})

router.put('/:slug', async (req, res) => {
    const slug = req.params.slug
    const requestBody = req.body

    const result = await Project.query()
        .findById(slug)
        .patch(requestBody)

    res.json({
        success: true, 
        info: `connect to heroku, GET data by id ${slug} & update ${requestBody}` ,
        id: result
    })
})



module.exports = router