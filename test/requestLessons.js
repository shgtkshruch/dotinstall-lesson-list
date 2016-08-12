const request = require('../requestLessons');
const cheerio = require('cheerio');
const assert = require('assert');

describe('requestLessons', () => {
  it('should get dotinstall lessons html', done => {
    request(body => {
      const $ = cheerio.load(body);
      assert($('h1.page-header').text().includes('レッスン一覧'));
      done();
    });
  });
});
