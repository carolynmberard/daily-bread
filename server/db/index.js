// Here we're bringing in our Sequelize instance together with the model.
// While only one model is currently needed, this format would allow us to
// more easily add additional models & associations without needed to
// change the underlying structure too much.

const db = require('./database')
const Bread = require('./bread')

module.exports = {
  db,
  Bread
}
