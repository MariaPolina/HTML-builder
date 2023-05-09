const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..', '/01-read-file/text.txt');

const readStream = fs.createReadStream(filePath);

readStream.on('data', (data) => {
    console.log(data.toString());
});

readStream.on('error', (error) => {
    console.error(error);
});