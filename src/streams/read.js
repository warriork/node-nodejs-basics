import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
 const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
 if (!fs.existsSync(filePath)) {throw new Error ('FS operation failed')}
 const stream = fs.createReadStream(filePath);

 stream.pipe(process.stdout);
};

await read();