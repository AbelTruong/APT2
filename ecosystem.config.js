require('dotenv').config()

const {
  FRONTEND_PORT,
  BACKEND_PORT,
  POSTGRES_USER,
  POSTGRES_PWD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
} = process.env

module.exports = {
  apps: [
    {
      script: 'npm',
      args: 'run serve',
      env_production: {
        FRONTEND_PORT,
        BACKEND_PORT,
        POSTGRES_USER,
        POSTGRES_PWD,
        POSTGRES_HOST,
        POSTGRES_PORT,
        POSTGRES_DB,
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
}
