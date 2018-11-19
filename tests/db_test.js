const sequelize = require('../db')

const {
  Workshop,
  CardType,
  Procedure,
  CheckItem,
  CheckCard
} = require('../models')

let initDb = async (force = true) => {
  try {
    await sequelize.sync({ force })

    await Workshop.create({
      id: 1,
      name: '衡阳供电段'
    })
    await Workshop.create({
      id: 2,
      name: '衡阳东高铁供电车间'
    })

    await CardType.create({
      id: 1,
      name: '接触网作业检查卡'
    })

    let ciid = 1
    for (let i = 1; i <= 6; i++) {
      let o = await Procedure.create({
        id: i,
        cardtypeId: 1,
        name: '步骤' + i
      })
      let pid = o.id

      for (let j = 1; j <= 3; j++) {
        await CheckItem.create({
          procedureId: pid,
          name: `检查项目 ${i}.${j}`
        })
      }
    }
  } catch (err) {
    console.log('===============================================')
    console.error('initDb(): Error occurred:', err)
  }
}

let run = async () => {
  await initDb()
  process.exit(0)
}

run()
