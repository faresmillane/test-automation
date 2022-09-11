const config = require("./config");

module.exports = {
    default: `--publish-quiet --require steps/*.js --parallel ${config.parallel} --retry ${config.retry}`
  }