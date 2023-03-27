const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};