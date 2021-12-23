const { readFileSync, writeFileSync } = require('fs');
// fs refers to file system, and this is equal to above
// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

// if there has no such file, it will be created when using writeFileSync in that premise you have write the right path and file format
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task');
console.log('starting the next one');

