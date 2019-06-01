const request = {
  get(url) {
    const request = require('request-promise-native');
    const reqOptions = {
      method: 'GET',
      timeout: 30000,
      resolveWithFullResponse: true,
      json: true,
      url
    };
    return request(reqOptions);
  }
};

module.exports = request;
