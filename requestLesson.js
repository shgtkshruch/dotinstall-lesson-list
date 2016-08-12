const request = require('request');

module.exports = (lessonUrl, cb) => {
  request(lessonUrl, (err, res, body) => {
    if (err) throw err;
    cb(body);
  });
};
