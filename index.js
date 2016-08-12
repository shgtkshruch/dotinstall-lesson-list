const fs = require('fs');
const json = require('./json');

json(results => {
  fs.writeFileSync('dotinstall-lessons.json', JSON.stringify(results));
});
