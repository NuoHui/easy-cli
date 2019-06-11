const ora = require('ora'); // 美化终端交互
const chalk = require('chalk');
const spinner = ora();

let lastMsg = null;

exports.logWithSpinner = (symbol, msg) => {
  if (!msg) {
    msg = symbol;
    symbol = chalk.green('✔');
  }
  if (lastMsg) {
    // 清除上次的spinner
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text
    });
  }
  spinner.text = ' ' + msg;
  lastMsg = {
    symbol: symbol + ' ',
    text: msg
  };
  spinner.start();
};

exports.stopSpinner = persist => {
  if (lastMsg && persist !== false) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text
    });
  } else {
    spinner.stop();
  }
  lastMsg = null;
};

exports.pauseSpinner = function() {
  spinner.stop();
};

exports.resumeSpinner = function() {
  spinner.start();
};
