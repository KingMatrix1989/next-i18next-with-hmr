const HttpBackend = require('i18next-http-backend/cjs');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  use: typeof window !== 'undefined' ? [HttpBackend] : [],
}
