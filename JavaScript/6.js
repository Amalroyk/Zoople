const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your age? ', (age) => {
  console.log("You are " + age + " years old.");
  rl.close();
});
