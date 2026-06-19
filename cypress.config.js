require('dotenv').config()

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {

    baseUrl: process.env.BASE_URL,

    env: {
      adminEmail: process.env.ADMIN_EMAIL,
      adminPassword: process.env.ADMIN_PASSWORD,
      invalidEmail: process.env.INVALID_EMAIL,
      wrongPassword: process.env.WRONG_PASSWORD,
      weakPassword: process.env.WEAK_PASSWORD,
      wrongEmail: process.env.WRONG_EMAIL,
      lockedEmail: process.env.LOCKED_EMAIL,
      errorEmail: process.env.ERROR_EMAIL
    }

  }
})