const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    html: false,
    json: true,
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    timestamp: 'yyyy-mm-dd HH:MM:ss',
    embeddedScreenshots: true,
    screenshots: {
      enabled: true,
      onFailure: true,
      onError: true,
      path: 'cypress/reports/screenshots'
    }
  },
  
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos'
});
