const chalk = require('chalk');
const semver = require('semver');

const { clearConsole } = require('./logger.js');
const getVersions = require('./getVersions.js');

exports.generateTitle = async function(checkUpdate) {
  const { current, latest } = await getVersions();
  let title = chalk.bold.blue(`EASY CLI v${current}`);
  if (checkUpdate && semver.gt(latest, current)) {
    // 提示升级
    title += chalk.green(`
    ┌────────────────────${`─`.repeat(latest.length)}──┐
    │  Update available: ${latest}  │
    └────────────────────${`─`.repeat(latest.length)}──┘`);
  }
  return title;
};

exports.clearConsole = async function clearConsoleWithTitle(checkUpdate) {
  const title = await exports.generateTitle(checkUpdate);
  clearConsole(title);
};
