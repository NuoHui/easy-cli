const fs = require('fs-extra');

module.exports = async function fetchRemotePreset(name, clone = false) {
  const os = require('os');
  const path = require('path');
  const download = require('download-git-repo');
  const tmpdir = path.resolve(os.tmpdir(), 'easy-cli');
  if (clone) {
    await fs.remove(tmpdir);
  }
  return new Promise((resolve, reject) => {
    download(name, tmpdir, { clone }, err => {
      if (err) {
        return reject(err);
      }
      return resolve(tmpdir);
    });
  });
};
