
let express = require('express');
let bodyParser = require('body-parser');

var session = require('cookie-session');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var server = express();

server.use(bodyParser.json())
    .use(express.static(__dirname + '/public'))
    .use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Headers", "X-Requested-With")
      .setHeader('Content-Type', 'application/json');
      next();
    })
    .use(session({secret: 'topsecret'}))
    .use(function(req, res, next){
        if (typeof(req.session.liste) === 'undefined') {
            req.session.liste = [];
        }
        if (typeof(req.session.id) === 'undefined'){
            req.session.id=0;
        }
        next();
    })
    .set('json spaces',0);

/**
 * Configuration des routes
 * @type Module listRoutes|Module listRoutes
 */
var routes = require('./api/routes/listRoutes')
routes(server);
/**
 * démarre le serveur
 */
server.listen(3000, function() {
     console.log('%s listening at %s', server.name, server.url);
});


