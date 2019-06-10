<hr>
<p>
  <a><img src="https://img.shields.io/github/issues/NuoHui/easy-cli.svg" /></a>
  <a><img src="https://img.shields.io/github/forks/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/github/stars/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/github/stars/NuoHui/easy-cli.svg"  /></a>
  <a><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" /></a>
  <a><img src="https://img.shields.io/badge/build-passing-green.svg" /></a>
</p>
<hr>

# 脚手架

一个简易上手的前端脚手架

## 功能

- 支持node项目, 基于vue的SPA应用
- 支持添加项目模板, 删除项目模板
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
