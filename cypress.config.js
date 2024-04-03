const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  onPrepare: function() {          
    browser.ignoreSynchronization = true;
  },

  e2e: {

    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportHeight:660,
    viewportWidthL:1000,
    defaultCommandTimeout: 30000,
    execTimeout:60000,
    taskTimeout:60000,
    pageLoadTimeout: 80000,
    requestTimeout: 5000,        
    responseTimeout: 300000,
    testIsolation: false,
    
    

  },
  chromeWebSecurity:false
});
