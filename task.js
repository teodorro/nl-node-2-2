const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const min = 0;
const max = 100;
const rand = Math.floor(Math.random() * max);
console.log(`rand = ${rand}`);
const rl = readline.createInterface({ input, output });
rl.question(`Загадано число в диапазоне от ${min} до ${max}\r\n`, (answer) => {
  rl.on('line', (answer) => {
    const num = parseInt(answer);
    if (typeof num === 'number' && Number.isFinite(num)) {
      if (num > rand) {
        console.log('Too high');
        rl.prompt();
      } else if (num < rand) {
        console.log('Too low');
        rl.prompt();
      } else {
        console.log('Right answer!');
        rl.close();
      }
    } else {
      console.log(`Please input a number`);
      rl.prompt();
    }
  });
  const num = parseInt(answer);
  if (typeof num === 'number' && Number.isFinite(num)) {
    if (num > rand) {
      console.log('Too high');
      rl.prompt();
    } else if (num < rand) {
      console.log('Too low');
      rl.prompt();
    } else {
      console.log('Right answer!');
      rl.close();
    }
  } else {
    console.log(`Please input a number`);
    rl.prompt();
  }
});
