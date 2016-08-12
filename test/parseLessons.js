const parseLessons = require('../parseLessons');
const fs = require('fs');
const assert = require('assert');
const html = fs.readFileSync('test/fixture/lessons.html', 'utf8');

describe('parseLessons', () => {
  it('should return lessons data', (done) => {
    parseLessons(html, (lessons) => {
      assert(lessons[0].lessonName.includes('HTML入門'), true);
      assert(lessons[0].lessonLink.includes('/lessons/basic_html_v3'), true);
      done();
    });
  });
});
