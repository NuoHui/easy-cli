const chalk = require('chalk');
const isGitUrl = require('is-git-url');
const { stopSpinner } = require('./util/spinner');
const { log } = require('./util/logger');
const {
  readTemplateJson,
  writeTemplateJson
} = require('./util/readTemplateData');

async function addProjectTemplate(templateName, gitRepoAddress) {
  try {
    const templateGitRepoJson = readTemplateJson();
    if (templateGitRepoJson[templateName]) {
      console.log(
        `  ` + chalk.red(`template name ${templateName} has exists.`)
      );
      return;
    }
    if (!isGitUrl(gitRepoAddress)) {
      console.log(
        `  ` +
          chalk.red(
            `git repo address ${gitRepoAddress} is not a correct git repo.`
          )
      );
      return;
    }
    templateGitRepoJson[templateName] = gitRepoAddress;
    writeTemplateJson(templateGitRepoJson);
    stopSpinner();
    log();
    log(`🎉  Successfully add project template ${chalk.yellow(templateName)}.`);
    log();
  } catch (error) {
    console.log(` ` + chalk.red(error));
  }
}

module.exports = (...args) => {
  return addProjectTemplate(...args).catch(err => {
    console.error(err);
    process.exit(1);
  });
};
