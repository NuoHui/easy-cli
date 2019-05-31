const { Command } = require('commander');
const chalk = require('chalk');

module.exports = (methodName, log) => {
  Command.prototype[methodName] = function(...args) {
    if (methodName === 'unknownOption' && this._allowUnknowOption) {
      return false;
    }
    this.outputHelp();
    console.log(`  ` + chalk.red(log(...args)));
    console.log();
    process.exit(1);
  };
};
