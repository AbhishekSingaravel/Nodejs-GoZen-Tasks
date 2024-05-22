const fs = require('fs');

// Read a text file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Modify content
  const modifiedData = data.toUpperCase();

  // Write to a new file
  fs.writeFile('output.txt', modifiedData, (err) => {
    if (err) throw err;
    console.log('File has been modified and saved!');
  });
});
