const ora = require('ora');
// const chalk = require('chalk');
const spinner = ora();

exports.stopSpinner = function() {
  //
};

exports.pauseSpinner = function() {
  spinner.stop();
};

exports.resumeSpinner = function() {
  spinner.start();
};
