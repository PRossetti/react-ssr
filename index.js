require('@babel/register')({
  ignore: ['node_modules'],
});

require('ignore-styles').default(['.scss']);

const express = require('express');
const server = express();
const app = require('./app');
const api = require('./api');


const { env: { PORT = 8080 } } = process;


server.use('/api', api);
server.use(express.static(`${__dirname}/public`));
server.use(app);

server.listen(PORT, () => {
  console.log(`Server is listen on port ${PORT}`)
})