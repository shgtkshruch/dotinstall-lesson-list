const each = require('async-each-series');
const sleep = require('sleep');

const requestLessons = require('./requestLessons');
const requestLesson = require('./requestLesson');
const parseLessons = require('./parseLessons');
const parseLesson = require('./parseLesson');

const results = [];

requestLessons(body => {
  parseLessons(body, lessons => {
    each(lessons, (lesson, next) => {
      const result = {};
      result.name = lesson.lessonName;
      result.link = lesson.lessonLink;
      requestLesson(lesson.lessonLink, body => {
        if (body.length < 500) {
          sleep.sleep(10);
          console.log('sleep process becouse body length less than 500');
        }
        parseLesson(body, lesson => {
          result.contents = lesson;
          results.push(result);
          next();
        });
      });
    }, err => {
      fs.writeFileSync('dotinstall-lesson-list.json', JSON.stringify(results));
    });
  });
});
