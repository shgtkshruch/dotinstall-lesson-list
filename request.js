const request = require('request');
const dotinstallUrl = 'http://dotinstall.com';

module.exports = function (cb) {
  request(dotinstallUrl + '/lessons', (err, res, body) => {
    if (err) throw err;
    cb(body);
  });
};
