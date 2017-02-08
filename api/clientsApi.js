var low = require('lowdb');
var db = low('./db.json');
var client = db('client');
var jsonParser = require('body-parser').json({});

module.exports = function(app) {
    app.get('/api/clients', function(req, res) {
        var val = client.value();
        res.json(val);
    });

    app.get('/api/client', jsonParser, function(req, res) {
        var val = client.find({ name: req.query.name });
        res.json(val);
    });

    app.post('/api/client/modify', jsonParser, function(req, res) {
        client.chain()
        .find({ name: req.query.name })
        .assign(req.body)
        .value()
        res.writeHead(200);
        res.end();
    });

    app.post('/api/clients', jsonParser, function(req, res) {
        client.push(req.body);
        res.writeHead(200);
        res.end();
    });

    app.post('/api/clients/remove', jsonParser, function(req, res) {
        client.remove()
        res.writeHead(200);
        res.end();
    });

    app.post('/api/client/delete', jsonParser, function(req, res) {
        var val = client.remove({ name: req.query.name });
        res.writeHead(200);
        res.end();
    });
};
