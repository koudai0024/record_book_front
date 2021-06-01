/* eslint-disable @typescript-eslint/no-var-requires */
const withLinaria = require("next-linaria");

module.exports = withLinaria({
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
});
