const semver = require('semver');

// 缓存上一次的最新版本号以及本地版本号
let sessionCached;
// 缓存上次版本号以及获取时间
let saveOptions = {};

module.exports = async function getVersions() {
  if (sessionCached) {
    return sessionCached;
  }
  let latest;
  let local = require('../../package.json').version;
  // 提供默认值作为第一次计算
  const { latestVersion = local, lastChecked = 0 } = saveOptions;
  // 本地最新的版本
  const cached = latestVersion;
  // 一天检查一次
  const daysPassed = (Date.now() - lastChecked) / (3600 * 1000 * 24);
  if (daysPassed > 1) {
    latest = await getAndCacheLatestVersion(cached);
  } else {
    getAndCacheLatestVersion(cached);
    latest = cached;
  }
  return (sessionCached = {
    latest,
    current: local
  });
};

// 获取最新版本并且缓存在磁盘本地以便下次使用
async function getAndCacheLatestVersion(cached) {
  const getPackageVersion = require('./getPackageVersion');
  const res = await getPackageVersion('easy-tool-cli', 'latest');
  if (res.statusCode === 200) {
    const { version } = res.body;
    // 如果获得版本号是合法的并且与之前缓存的版本不一致说明是最新的
    if (semver.valid(version) && version !== cached) {
      saveOptions = {
        latestVersion: version,
        lastChecked: Date.now()
      };
      return version;
    }
  }
  return cached;
}
