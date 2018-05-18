const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', (err, res) => {
	res.send('환영합니다.');

});

app.use(router);

app.listen(port, err => {
	if(err) console.log(err)
	else console.log('server is running')
});