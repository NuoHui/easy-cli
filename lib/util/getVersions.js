// const semver = require('semver');

// 缓存: 避免每次去取
let sessionCached;

module.exports = async function getVersions() {
  if (sessionCached) {
    return sessionCached;
  }
  let latest;
  let local = require('../../package.json').version;
  return (sessionCached = {
    latest,
    current: local
  });
};
