var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: './src/test/out/e2e',
  filename: 'endToend-report-summary.html'
});

exports.config = {
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--headless', '--disable-gpu']
    }
    // 'chromeOptions': {
    //   'args': ['show-fps-counter=true']
    // }
    // 'browserName': 'PhantomJS' not supported "--headless"
  },
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },
  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  framework: 'jasmine2',
  specs: ['./src/test/e2e/*.spec.js']
};