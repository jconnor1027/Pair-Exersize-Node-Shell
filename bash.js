const pwd = require('./pwd');

process.stdout.write('prompt >');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the new line
  if(cmd === 'pwd') {
    pwd();
  }
//process.stdout.write('You typed: ' + cmd);
process.stdout.write('\nprompt > ');
})



