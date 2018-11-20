const { CardType } = require('../models')

module.exports = (router) => {
  router.get('/api/cardtypes', async function (ctx, next) {
    let data = await CardType.findAll({
      attributes: ['id', 'name']
    })
    ctx.body = data
  })
}
