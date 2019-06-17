// Karma configuration
// Generated on Thu Jun 13 2019 16:45:55 GMT+0100 (BST)

module.exports = function(config) {
  var configuration = {
    basePath: '',
    plugins: ['karma-chrome-launcher', 'karma-jasmine'],
    frameworks: ['jasmine'],
    files: [
      'https://unpkg.com/tone',
      'https://code.jquery.com/jquery-3.4.1.js',
      '../public/javaScript/BeatPlayer.js',
      '../public/javaScript/Chat.js',
      './client/*Spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false,
    concurrency: Infinity

  }

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
 }
 config.set(configuration);
}
