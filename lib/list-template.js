const chalk = require('chalk');
const { readTemplateJson } = require('./util/readTemplateData');
const { stopSpinner } = require('./util/spinner');
const { log } = require('./util/logger');
async function listAllTemplate() {
  const templateGitRepoJson = readTemplateJson();
  for (let key in templateGitRepoJson) {
    stopSpinner();
    log();
    log(
      `➡️  Template name ${chalk.yellow(key)},  Github address ${chalk.yellow(
        templateGitRepoJson[key]['github']
      )}`
    );
    log();
  }
  if (!Object.keys(templateGitRepoJson).length) {
    stopSpinner();
    log();
    log(`💔  No any template.`);
    log();
  }
}

module.exports = () => {
  return listAllTemplate().catch(err => {
    console.error(err);
    process.exit(1);
  });
};
