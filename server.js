const http = require('http');

const path = require('path');

const express = require('express');

const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(morgan('dev'));

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/build/index.html'));
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.info(`> Application running on ${HOST} at ${PORT}`);
});

process.on('exit', (code) => {
  app.locals.data.close();
  console.info(`About to exit with code: ${code}`);
});
