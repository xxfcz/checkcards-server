module.exports = (router) => {
  require('./api')(router)

  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };

    //await ctx.render('welcome', {title: ctx.state});
    ctx.body = { ok: true, msg: 'welcome' }
  })
}
