#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const didYouMean = require('didyoumean');
const semver = require('semver');
const enhanceErrorMessages = require('../lib/util/enhanceErrorMessages.js');
const requiredNodeVersion = require('../package.json').engines.node;

didYouMean.threshold = 0.6;

// 检测nNode版本
function checkNodeVersion(wanted, cliName) {
  // 检测node版本是否符合要求范围
  if (!semver.satisfies(process.version, wanted)) {
    console.log(
      chalk.red(
        'You are using Node ' +
          process.version +
          ', but this version of ' +
          cliName +
          ' requires Node ' +
          wanted +
          '.\nPlease upgrade your Node version.'
      )
    );
    // 退出进程
    process.exit(1);
  }
}

checkNodeVersion(requiredNodeVersion, '@easy/cli');

program
  .version(require('../package').version) // 版本
  .usage('<command> [options]'); // 使用信息

// 初始化项目模板
program
  .command('create <template-name> <project-name>')
  .description('create a new project from a template')
  .action((templateName, projectName, cmd) => {
    const argvLen = process.argv.length;
    // 输入参数校验
    if (argvLen > 5) {
      console.log(
        chalk.yellow(
          "\n Info: You provided more than one argument. The first one will be used as the template's name, the rest are ignored."
        )
      );
    }
    require('../lib/easy-create')(
      lowercase(templateName),
      lowercase(projectName)
    );
  });

program
  .command('list', 'list available project template') // 列出支持的项目模板
  .command('add', 'add a project template') // 添加一个项目模板
  .command('delete', 'delete a project template'); // 删除一个项目模板

program.arguments('<command>').action(cmd => {
  program.outputHelp();
  console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
  console.log();
  suggestCommands(cmd);
});

// 重新commander某些事件
enhanceErrorMessages('missingArgument', argsName => {
  return `Missing required argument ${chalk.yellow(`<${argsName}>`)}`;
});

program.parse(process.argv); // 把命令行参数传给commander解析

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

// easy支持的命令
function suggestCommands(cmd) {
  const avaliableCommands = program.commands.map(cmd => {
    return cmd._name;
  });
  // 简易智能匹配用户命令
  const suggestion = didYouMean(cmd, avaliableCommands);
  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`));
  }
}

function lowercase(str) {
  return str.toLocaleLowerCase();
}
