module.exports = config => {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [{ pattern: 'test/**/*.js', type: 'module' }, { pattern: '*.js', included: false, type: 'module' }],
    preprocessors: { '*.js': 'coverage' },
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'text' }, { type: 'lcovonly', subdir: './' }, { type: 'html', subdir: './html' }],
      instrumenterOptions: {
        istanbul: { esModules: true }
      }
    },
    reporters: ['progress', 'coverage'],
    port: 9876, // karma web server port
    colors: true,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    esm: {
      nodeResolve: true
    },
    concurrency: Infinity
  })
  return config
}
