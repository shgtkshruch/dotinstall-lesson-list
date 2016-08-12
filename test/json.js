const json = require('../json');
const assert = require('assert');

describe('json', () => {
  it('return json data', done => {
    json(results => {
      assert(results[0].name.inclues('HTML入門'), true);
      assert(results[0].link.inclues('http://dotinstall.com/lessons/basic_html_v3'), true);
      assert(results[0].contents[0].name.inclues('HTMLとはなにか？'), true);
      done();
    });
  });
});
