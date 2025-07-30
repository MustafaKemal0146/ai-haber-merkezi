module.exports = {
  apps: [
    {
      name: 'ai-haber-cors-proxy',
      script: 'cors-proxy.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    },
    {
      name: 'ai-haber-web',
      script: 'npx',
      args: 'serve -s dist -l 3000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};