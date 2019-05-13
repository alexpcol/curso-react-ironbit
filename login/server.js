const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const ACCESS_TOKEN = 'cc3c5a7519be1d571384bad5d6ade9d3642bb26a'

app.post('/token', (req, res) => {
	if (!req.body.username) { return res.json({ error: 'Missing username param'}) }
	if (!req.body.password) { return res.json({ error: 'Missing password param'}) }

	if (req.body.username !== 'galactus') { return res.json({ error: 'Invalid username or password'}) }
	if (req.body.password !== 'marvel') { return res.json({ error: 'Invalid username or password'}) }

	res.json({
		accessToken: ACCESS_TOKEN,
		type: 'Bearer'
	})
})

app.listen(process.env.PORT, () => {
	console.log('server running')
})