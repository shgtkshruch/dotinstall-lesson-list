const request = require('../requestLesson');
const cheerio = require('cheerio');
const assert = require('assert');

describe('requestLesson', () => {
  it('should get dotinstall lesson html', (done) => {
    request('http://dotinstall.com/lessons/basic_html_v3', function (body) {
      const $ = cheerio.load(body);
      assert($('h1.page-header').text().includes('HTML入門'));
      done();
    });
  });
});
