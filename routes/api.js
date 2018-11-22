const { CardType, CheckItem, Procedure } = require('../models')
const logger = require('koa-logger')

module.exports = (router) => {
  router.get('/api/cardtypes', async function (ctx, next) {
    let data = await CardType.findAll({
      attributes: ['id', 'name']
    })
    ctx.body = data
  })

  router.get('/api/cardtypes/:id', async (ctx,next)=>{
    let id = ctx.params.id
    let data = await CardType.findById(id)
    ctx.body = data
  })

  router.get('/api/checkitems/type/:id', async function (ctx, next) {
    let typeId = ctx.params.id
    console.log(typeId)
    let data = await CheckItem.findAll({
      include: [
        {
          model: Procedure,
          where: {
            cardtypeId: typeId
          }
        }
      ]
    })
    //console.log(data)
    ctx.body = data
  })

  router.get('/api/procedures/type/:id', async function (ctx, next) {
    let typeId = ctx.params.id
    console.log(typeId)
    let data = await Procedure.findAll({
      where: {
        cardtypeId: typeId
      },
      include: [{
        model: CheckItem
      }]
    })
    //console.log(data)
    ctx.body = data
  })

}
