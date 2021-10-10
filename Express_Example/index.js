const express = require('express'),
        http = require('http'),
        morgan = require('morgan');

const dishRouter = require('./routes/dishesRouter');

const hostname = 'localhost',
        port = 3000;


const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/dishes', dishRouter);


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});