const cheerio = require('cheerio');
const dotinstallUrl = 'http://dotinstall.com';

module.exports = (body, cb) => {
  const $ = cheerio.load(body);
  const lessons = [];
  $('.all-packages-list a').each(function (i, elem) {
    const lessonName = $(this).text();
    const lessonLink = dotinstallUrl + $(this).attr('href');
    lessons.push({lessonName, lessonLink});
  });
  cb(lessons);
};
