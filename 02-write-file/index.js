const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

fs.open('../HTML-builder/02-write-file/text.txt', 'a', (err, fd) => {
    if (err) throw err;
    console.log('Please, write something');
    rl.on('line', (input) => {
        if (input === 'exit') {
            console.log('Goodbye!');
            fs.close(fd, (err) => {
                if (err) throw err;
                process.exit();
            });
        } else {
            fs.write(fd, input + '\n', (err) => {
                if (err) throw err;
            });
        }
    });
    rl.on('SIGINT', () => {
        console.log('Goodbye!');
        rl.close();
        process.exit(0);
    });
});