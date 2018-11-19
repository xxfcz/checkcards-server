const sequelize = require("../db")

const { Workshop } = require("../models")

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

  } catch (err) {
    console.log("===============================================")
    console.error("initDb(): Error occurred:", err)
  }
}

initDb()
//process.exit(0)