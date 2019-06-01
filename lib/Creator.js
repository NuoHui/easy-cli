const chalk = require('chalk');
const EventEmitter = require('events');
const { clearConsole } = require('./util/clearConsole');
const { logWithSpinner } = require('./util/spinner');

module.exports = class Creator extends EventEmitter {
  constructor(name, context) {
    super();
    this.name = name;
    this.context = process.env.EASY_CLI_CONTEXT = context;
  }

  async create(cliOptions = {}) {
    await clearConsole();
    logWithSpinner(`✨`, `Creating project in ${chalk.yellow(this.context)}.`);
  }
};
