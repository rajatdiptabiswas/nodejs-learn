const readline = require('readline');
const rl = readline.createInterface({ input : process.stdin, output : process.stdout });

let num1 = Math.floor((Math.random() * 50) + 1);
let num2 = Math.floor((Math.random() * 50) + 1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }?\n`,
(userInput)=>{
    if (userInput.trim() == answer) {
        console.log(`You answered correctly!\n`);
        rl.close();
    } else {
        rl.setPrompt('Incorrect answer. Please try again.\n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if (userInput.trim() == answer) {
                console.log(`You got the correct answer!\n`);
                rl.close();
            } else {
                rl.setPrompt(`Your answer ${ userInput } is incorrect. Please try again.\n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close', ()=>{
    console.log(`Bye!\n`);
});