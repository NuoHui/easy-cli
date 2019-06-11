const { execSync } = require('child_process');
const LRU = require('lru-cache'); // 在内存中管理缓存数据
let _hasGit;
const _projectGit = new LRU({
  max: 10, // 缓存大小
  maxAge: 1000 // 缓存过期时间
});

// 测试是否安装了git
exports.hasGit = () => {
  if (_hasGit) {
    return _hasGit;
  }
  try {
    // 执行shell
    execSync('git --version', { stdio: 'ignore' });
    return (_hasGit = true);
  } catch (error) {
    return (_hasGit = false);
  }
};

// 测试该项目是否已经是一个git repo
exports.hasProjectGit = cwd => {
  if (_projectGit.has(cwd)) {
    return _projectGit.get(cwd);
  }
  let result;
  try {
    execSync('git status', { stdio: 'ignore' }, cwd);
    result = true;
  } catch (error) {
    result = false;
  }
  _projectGit.set(cwd, result);
  return result;
};
