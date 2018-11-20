
module.exports = (router) => {
  router.get('/api/cardtypes', async function (ctx, next) {
    ctx.body = [
      { id: 1, name: '类型1' },
      { id: 2, name: '类型2' },
    ];
  })
}
