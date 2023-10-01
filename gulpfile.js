require('dotenv').config()

/**
 * Update shopify scopes from .env file into shopify.app.toml file
 */
const updateScopes = async () => {
  return 1
}

async function defaultTask(cb) {
  updateScopes()

  cb()
}

exports.default = defaultTask
