const request = require('request');

module.exports = cb => {
  request('http://dotinstall.com/lessons', (err, res, body) => {
    if (err) throw err;
    cb(body);
  });
};
