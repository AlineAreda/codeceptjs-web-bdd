exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://wpjobs.sitesopta.com.br',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',  
    "home_page": "./pages/home_page.js",
    "login_page": "./pages/login_page.js"    
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_steps.js']
  },
  plugins: {
    allure: {
      enabled: true
    }, 
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },   
     screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'codeceptjs-web-bdd'
}