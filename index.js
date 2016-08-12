const fs = require('fs');
const json = require('./json');

json(results => {
  fs.writeFileSync('dotinstall-lesson-list.json', JSON.stringify(results));
});
