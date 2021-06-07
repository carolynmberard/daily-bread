const Sequelize = require('sequelize')
const db = require('./database')

module.exports = db.define('bread', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [3, 100],
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 1000],
    }
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 1.00,
      max: 20000.00,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.escoffieronline.com/wp-content/uploads/2013/04/iStock-995038782-small.jpg',
  }
})
