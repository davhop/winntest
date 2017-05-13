'use strict';
module.exports = function(server) {
  var listeTrns = require('../controller/listController');


  // todoList Routes
  server.route('/api/transports')
    .get(listeTrns.list)
    .post(listeTrns.create);


  server.route('/api/transports/:id')
    .get(listeTrns.read)
    .put(listeTrns.update)
    .delete(listeTrns.delete);
};


