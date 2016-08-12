const parseLesson = require('../parseLesson');
const fs = require('fs');
const assert = require('assert');
const html = fs.readFileSync('test/fixture/lesson.html', 'utf8');

describe('parseLesson', () => {
  it('should return lesson data', done => {
    parseLesson(html, lesson => {
      assert(lesson[0].name.includes('HTMLとはなにか？'), true);
      assert(lesson[0].time.includes('02:56'), true);
      assert(lesson[0].summaries.includes('概要'), true);
      done();
    });
  });
});
