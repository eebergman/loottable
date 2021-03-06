// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["parallel", "jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-parallel"),
      require("karma-tslint"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/lootable"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    restartOnFileChange: true,
    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
    preprocessors: {
      "src/**/*.ts": ["tslint"],
    },
    tslintPreprocessor: {
      formatter: "prose",
      rulesDirectory: "tslint.json",
      fix: true,
      stopOnFailure: false,
    },
    parallelOptions: {
      executors: 4,
      shardStrategy: "round-robin",
    },
  });
};
