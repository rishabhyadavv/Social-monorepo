const fs = require('fs');
const https = require('https');
const config = require('./config/config');
const {mongoConnect} = require('./services/mongo');
const app = require('./app');

const server = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app);

function close() {
  server.close()
}

async function startServer() {
 //await mongoConnect();
  return server.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}...`);
  });
}

 startServer();

module.exports = server
