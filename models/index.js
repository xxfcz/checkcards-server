const Sequelize = require('sequelize')
const sequelize = require('../db')

const Workshop = sequelize.define('workshop', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = {
  Workshop
}
