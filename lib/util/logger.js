// const chalk = require('chalk');
const readline = require('readline');
const EventEmitter = require('events');

exports.event = new EventEmitter();

exports.clearConsole = title => {
  if (process.stdout.isTTY) {
    // 判断是否在终端环境
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    // 在终端移动光标到标准输出流的起始坐标位置, 然后清除给定的TTY流
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    if (title) {
      console.log(title);
    }
  }
};
