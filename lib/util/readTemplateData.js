const fs = require('fs');
const path = require('path');

exports.readTemplateJson = () => {
  return JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../config/templateGitRepo.json'),
      'utf8'
    )
  );
};
