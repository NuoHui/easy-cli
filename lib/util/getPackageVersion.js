const request = require('./request.js');
module.exports = async function getPackageVersion(id, range = '') {
  // const registry = (await require('./shouldUseTaobao')())
  //   ? `https://registry.npm.taobao.org`
  //   : `https://registry.npmjs.org`;
  const registry = `https://registry.npm.taobao.org`; // TODO区分淘宝源与npm源
  let result;
  try {
    result = await request.get(
      // 关于npm对package的定义 https://docs.npmjs.com/about-packages-and-modules
      // https://registry.npmjs.org/easy-tool-cli/latest
      `${registry}/${encodeURIComponent(id).replace(/^%40/, '@')}/${range}`
    );
  } catch (err) {
    return err;
  }
  return result;
};
