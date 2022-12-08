const path = require('path');
const fs = require('fs');


module.exports = (filePath) => {
  global.env = {};

  // Get filepath if it's not set
  if(!filePath) filePath = path.resolve(path.join(process.mainModule.path, '.env'));

  // Check if file exists using fs
  if(!fs.existsSync(filePath)) return;

  // Read file using fs
  const fileLines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
  
  // Go threw each line
  fileLines.forEach(line => {
    // Split by first index of equal sign
    let [name, ...value] = line.split('=');
    value = value.join();

    if(value === undefined) return;
    if(name[0] === '#') return;
    if(name === '') return;

    // Format value as type
    if(!isNaN(value)) value = Number(value);
    if(isJSON(value)) value = JSON.parse(value);

    global.env[name] = value;
  })
}

function isJSON(str) {
  if(typeof str !== 'string') return false;

  try {
      return (JSON.parse(str) && !!str);
  } catch (e) {
      return false;
  }
}
