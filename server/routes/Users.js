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

router.get('/:slug', (req, res) => {
	res.json({
		success: true,
		info: 'this is user route'
	});
});

router.post('/submit', (req, res) => {
	const body = req.body

	res.json({
		success: true,
		info: 'submit new user success',
		data : body
	})
})

module.exports = router;
