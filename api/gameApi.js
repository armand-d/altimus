var low = require('lowdb');
var db = low('db.json');
var game = db('game');
var jsonParser = require('body-parser').json({});

module.exports = function(app) {
    app.get('/api/game', function(req, res) {
        var val = game.value();
        res.json(val);
    });

    app.post('/api/game', jsonParser, function(req, res) {
        game.push(req.body);
        res.writeHead(200);
        res.end();
    });

    app.post('/api/game/remove', jsonParser, function(req, res) {
        game.remove()
        res.writeHead(200);
        res.end();
    });
};