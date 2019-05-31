# 脚手架

## 思路

- 解耦: 脚手架与模板分离
  - 脚手架负责构建流程, 通过命令行与用户交互, 获取项目信息
  - 模板负责统一项目结构, 依赖项管理
  - 脚手架需要检测模板的版本是否有更新, 支持模板的删除与新建

## 过程

- package.json下的bin字段

```
bin: 配置内部命令对应的可执行文件位置, 配置命令后, npm 会寻找到对应的可执行文件, 然后在node_modules/.bin目录下建立对应的符合链接。
由于node_modules/.bin会在运行时候加入到系统的环境变量, 因此我们可以通过npm 调用命令来执行脚本。
所有node_modules/.bin目录下的命令都可以通过npm run [命令]执行。
```

- npm link 本地调试

[npm link使用](https://github.com/atian25/blog/issues/17)



## 使用到的模块

- [commander.js](https://github.com/tj/commander.js/): 命令处理与参数分析
