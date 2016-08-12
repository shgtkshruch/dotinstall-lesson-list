const dotinstallLessons = require('../dotinstall-lessons.json');
const assert = require('assert');

describe('json', () => {
  it('return json data', () => {
    assert(dotinstallLessons[0].name.includes('HTML入門'), true);
    assert(dotinstallLessons[0].link.includes('http://dotinstall.com/lessons/basic_html_v3'), true);
    assert(dotinstallLessons[0].contents[0].name.includes('HTMLとはなにか？'), true);
  });
});
