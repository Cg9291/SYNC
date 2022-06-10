var fs = require('fs');

fs.writeFile('myrenamedfile.txt', 'Used to be "mynewfile1"', function (err) {
  if (err) throw err;
  console.log('Saved!');
});