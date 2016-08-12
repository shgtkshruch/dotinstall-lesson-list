const requestLesosn = require('./requestLesson');
const cheerio = require('cheerio');

module.exports = (body, cb) => {
  const $ = cheerio.load(body);
  const lesson = [];
  $('#lessons_list > li').each(function (i, elem) {
    const content = {};
    content.name = $(this).find('> a').text();
    content.time = $(this).find('> a + span').text();
    const summaries = [];
    $(this).find('> .lesson-summaries > li').each(function (i, elem) {
      summaries.push($(this).text());
    });
    content.summaries = summaries;
    lesson.push(content);
  });
  cb(lesson);
};
