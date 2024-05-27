const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 5000);
//création de mon server
const server = http.createServer(app);
server.listen( process.env.PORT || 5000, () => {
    console.log("Le serveur a bien été lancé sur le port 5000");
});