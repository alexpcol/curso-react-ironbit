const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(bodyParser.json())
const ACCESS_TOKEN = 'cc3c5a7519be1d571384bad5d6ade9d3642bb26a'
//const ACCESS_TOKEN = '89cea806ed55dafada29a92af2da4407';

app.post('/token', (req, res) => {
	if (!req.body.username) { return res.status(422).json({ error: 'Missing username param' }) }
	if (!req.body.password) { return res.status(422).json({ error: 'Missing password param' }) }

	if (req.body.username !== 'galactus') { return res.status(403).json({ error: 'Invalid username or password' }) }
	if (req.body.password !== 'marvel') { return res.status(403).json({ error: 'Invalid username or password' }) }

	res.json({
		accessToken: ACCESS_TOKEN,
		type: 'Bearer'
	})
})

app.listen('3000', () => {
	console.log('server running')
})
