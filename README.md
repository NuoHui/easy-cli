<hr>
<p>
  <a><img src="https://img.shields.io/github/issues/NuoHui/easy-cli.svg" /></a>
  <a><img src="https://img.shields.io/github/forks/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/github/stars/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/github/stars/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" /></a>
  <a><img src="https://img.shields.io/badge/build-passing-green.svg" /></a>
  <a><img src="https://img.shields.io/npm/v/easy-tool-cli.svg" /></a>
</p>
<hr>

# 脚手架

一个简易上手的前端脚手架

## 功能

- 支持多类型项目模板(目前Node, Vue CSR), 模板都会集成代码检测, 工作流等
- 支持添加项目模板, 删除项目模板(flok 作为自己的工具推荐使用)
- 支持自动检测模板依赖更新

## 使用方法

### 安装

```
$ npm i easy-tool-cli -g
```

### 创建项目

```
# 指定项目名字创建项目
$ easy create 模板名<template-name> 项目名字<project-name>

# 在当前目录创建项目
$ easy create 模板名<template-name> .
```

### 查看所有支持的项目模板

```
$ easy list
```

### 添加项目模板

```
$ easy add 模板名<template-name> 模板github仓库地址,支持ssh/https格式<<git-repo-address>>
```

### 发布到npm

执行pkg下的脚本, push代码, travis就会执行检测后续自动发到npm.
```
"publishPatch": "npm version patch -m 'chore: [patch]'",
"publishMinor": "npm version patch -m 'chore: [minor]'",
"publishMajor": "npm version patch -m 'chore: [major]'"
```

### TODOLIST

- 优化Node应用模板
- 完成Vue单页面应用模板
- 添加单测
