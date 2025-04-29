import fs, { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    if (!fs.existsSync(filePath)) {
        throw new Error(`FS operation failed`);
    }
    const fileStream = createReadStream(filePath);

    fileStream.on('data', chunk => hash.update(chunk));
    fileStream.on('end', () => {
        console.log(hash.digest('hex'));
    });
    fileStream.on('error', err => {
        console.error('Error reading the file:', err);
    });
};

await calculateHash();