Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'here-api-map-tool',
      path: '/here-api-map-tool',
      component: require('./components/Tool'),
    },
  ])
})
