const chalk = require('chalk');
const execa = require('execa'); // 一个child_process封装库
const EventEmitter = require('events');
const { clearConsole } = require('./util/clearConsole');
const { logWithSpinner, stopSpinner } = require('./util/spinner');
const { log, warn } = require('./util/logger');
const { hasGit, hasProjectGit } = require('./util/env');

module.exports = class Creator extends EventEmitter {
  constructor(name, context) {
    super();
    this.name = name;
    this.context = process.env.EASY_CLI_CONTEXT = context; // cwd
  }

  async create(cliOptions = {}) {
    const { run, name } = this;
    await clearConsole();
    logWithSpinner(`✨`, `Creating project in ${chalk.yellow(this.context)}.`);
    const shouldInitGit = this.shouldInitGit();
    if (shouldInitGit) {
      // 已经安装git
      logWithSpinner(`🗃`, `Initializing git repository...`);
      await run('git init');
    }
    stopSpinner();

    // commit init state
    let gitCommitFailed = false;
    if (shouldInitGit) {
      await run('git add -A');
      try {
        await run('git', ['commit', '-m', 'init']);
      } catch (error) {
        gitCommitFailed = true;
      }
    }

    stopSpinner();
    log();
    log(`🎉  Successfully created project ${chalk.yellow(name)}.`);
    log();
    if (gitCommitFailed) {
      // commit fail
      warn(
        `Skipped git commit due to missing username and email in git config.\n` +
          `You will need to perform the initial commit yourself.\n`
      );
    }
  }

  run(command, args) {
    if (!args) {
      [command, ...args] = command.split(/\s+/);
    }
    return execa(command, args, { cwd: this.context });
  }

  shouldInitGit() {
    if (!hasGit()) {
      return false;
    }
    return !hasProjectGit(this.context);
  }
};
