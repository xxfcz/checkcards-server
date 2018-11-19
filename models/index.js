const Sequelize = require('sequelize')
const sequelize = require('../db')

const Workshop = sequelize.define('workshop', {
  name: {
    type: Sequelize.STRING
  }
})

// 检查卡类型：作业卡，辅助作业卡，登乘卡，......
const CardType = sequelize.define('cardtype', {
  name: Sequelize.STRING
})

// 流程
const Procedure = sequelize.define('procedure', {
  name: Sequelize.STRING
})

Procedure.belongsTo(CardType)
CardType.hasMany(Procedure)

// 盯控项目
const CheckItem = sequelize.define('checkitem', {
  name: Sequelize.STRING
})

CheckItem.belongsTo(Procedure)
Procedure.hasMany(CheckItem)

// 检查卡
const CheckCard = sequelize.define('checkcard', {
  // 1=没有问题，2=无此项目，3=存在问题
  choice: Sequelize.SMALLINT,
  problem: Sequelize.STRING
})

module.exports = {
  Workshop,
  CardType,
  Procedure,
  CheckItem,
  CheckCard
}

