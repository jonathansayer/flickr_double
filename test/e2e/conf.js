exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  capabilities: {
        browserName: 'chrome'
  },
  specs: ['flickrProfileFeature.js'],
  getTitleTimeout: 5000
}
