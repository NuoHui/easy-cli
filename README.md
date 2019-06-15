<hr>
<p>
  <a><img src="https://img.shields.io/github/issues/NuoHui/easy-cli.svg" /></a>
  <a><img src="https://img.shields.io/github/forks/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/github/stars/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" /></a>
  <a><img src="https://img.shields.io/badge/build-passing-green.svg" /></a>
  <a><img src="https://img.shields.io/npm/v/easy-tool-cli.svg" /></a>
</p>
<hr>

# easyCli

一个简易上手的前端脚手架, 轻松创建项目模板, 实现0配置, 快速开发。

## Features

- 支持多类型项目模板(目前[Node](https://github.com/NuoHui/node_code_constructor), [Vue CSR](https://github.com/NuoHui/vue_code_constructor)), 模板都会集成代码扫描, 工作流等, 具体查看模板github地址。
- 支持添加项目模板, 删除项目模板(flok 作为自己的工具推荐使用)
- 支持自动检测脚手架更新

## Installation & Quick start

### 安装

Windows系统安装
```
$ npm i easy-tool-cli -g
```

Mac下安装
```
$ sudo npm i easy-tool-cli -g
```

### 查看帮助信息

```
$ easy
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
$ easy add 模板名<template-name> 模板github仓库地址,支持ssh/https格式<git-repo-address>
```

### 删除项目模板

```
$ easy delete 模板名<template-name>
```

### 发布到npm

执行pkg下的脚本, push代码, travis就会执行检测后续自动发到npm.
```
npm run release
```

### TODOLIST

- 优化Node应用模板
- 添加单测
- 添加changelog
