const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(router);
app.use(express.static('public'));

io.on('connection', socket => {
	socket.on('chat message', msg => {
		io.emit('chat message', msg);
	});
});

http.listen(port, err => {
	if(err) console.log(err)
	else console.log(`server is running at ${port}`)
});
