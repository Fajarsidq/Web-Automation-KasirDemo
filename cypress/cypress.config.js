const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 80000,
  defaultCommandTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
