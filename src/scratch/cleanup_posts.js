const fs = require('fs');
const path = 'e:\\all project\\khirsapat.bd\\src\\data\\posts.ts';

const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// Remove lines 80 to 95 (0-indexed 79 to 94)
lines.splice(79, 16);

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('Successfully cleaned up corrupted lines.');
