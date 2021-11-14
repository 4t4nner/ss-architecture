const express = require('express');
const path = require('path');
const app = express();

const baseDir = path.resolve(path.join(__dirname, '..', 'build'))
const indexPath = path.join(baseDir, 'index.html')

console.log(baseDir);
app.use(express.static(baseDir));

app.get('/', function (req, res) {
	console.log(indexPath);
	res.sendFile(indexPath);
});

const port = process.env.NODE_PORT || 9000;

app.listen(port);

console.log('app listen on port ' + port);