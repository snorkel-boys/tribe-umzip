const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const router = express.Router();

// app.use(router);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

io.on('connection', socket => {
	socket.on('chat message', msg => {
		io.emit('chat message', msg);
	});
	socket.on('disconnect', () => {
		console.log(socket.id + 'a user disconnected');
	});
});

http.listen(port, err => {
	if(err) console.log(err)
	else console.log(`server is running at ${port}`)
});

app.post('/chat.html', (req, res) => {
	const name = req.body.name;
	console.log(name);
});
