module.exports = {
  apps: [
    {
      name: 'manohar-bakery',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/manohar-bakery',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/monohar-bakery-error.log',
      out_file: '/var/log/pm2/monohar-bakery-out.log',
      log_file: '/var/log/pm2/monohar-bakery.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      watch: false,
    },
  ],
};

