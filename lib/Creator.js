const EventEmitter = require('events');

module.exports = class Creator extends EventEmitter {
  constructor(name, context) {
    super();
    this.name = name;
    this.context = process.env.EASY_CLI_CONTEXT = context;
  }

  async create(cliOptions = {}) {
    //
  }
};
