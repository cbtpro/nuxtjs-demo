module.exports = {
  apps: [
    {
      name: 'nuxtjs-demo',
      exec_mode: 'cluster',
      instances: '1',
      script: '.output/server/index.mjs',
      args: 'start'
    }
  ]
};