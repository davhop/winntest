'use strict';

let Transport = require('../../class/transport.js');
var transports = require('../../data/transports.json');

exports.list = function(req, res) {
    var liste = [];
    liste = Transport.listeTransports(transports.transports);
    res.status(200).json(liste);
};

exports.create = function(req, res) {
  var new_transport = new Transport(req.body);
  new_transport.save(function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};

exports.read = function(req, res) {
  Transport.findById(req.params.id, function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};


exports.update = function(req, res) {
  Transport.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};


exports.delete = function(req, res) {
  Transport.remove({
    _id: req.params.id
  }, function(err, transport) {
    if (err)
      res.send(err);
    res.json({ message: 'Transport successfully deleted' });
  });
};



