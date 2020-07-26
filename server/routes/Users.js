const express = require('express');

const router = express.Router();

const { Project, User } = require('../models/schema');

router.get('/all', async (req, res) => {
	console.log('user in ');
	const user = await User.query();

	res.json({
		success: true,
		info: 'success heroku connection, get all user data',
		data : user
	});

	

});

router.get('/:userId', async (req, res) => {
    const user = req.params.userId

    const result = await Project.query().where('users_id' , user)

    res.json({
        success: true, 
        info: `connect to heroku, GET data by id ${user}` ,
        id: result
    })
})


router.post('/submit', (req, res) => {
	const body = req.body

	res.json({
		success: true,
		info: 'submit new user success',
		data : body
	})
})

module.exports = router;
