// node_modules/.bin/babel-node

import config from './config';
import apiRouter from './api';
import express from 'express';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'you need to be more <em>professional</em>'
  })
})

server.use('/api', apiRouter)
server.use(express.static('public'))

server.get('/about.html', (req, res) => {
  res.send('the about page')
});

server.listen(config.port, () => {
  console.log('Express listening on Port ', config.port);
});