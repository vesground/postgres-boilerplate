const model = require("../model");

function create(request, response) {
  model.createOrder(request.body);
  // We need a serialization module before sending a response back to UI
  response.status(200).send('Created!');
}

module.exports = { 
  create,
 };
