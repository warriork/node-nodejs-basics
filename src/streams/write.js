import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const readStream = process.stdin
    const writeStream = fs.createWriteStream(filePath);
    readStream.pipe(writeStream);

};

await write();






