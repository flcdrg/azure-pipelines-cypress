const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporterOptions: {
    testCaseSwitchClassnameAndName: true,
    attachments: true,
  },
  video: true,
  screenshotOnRunFailure: true,
});
