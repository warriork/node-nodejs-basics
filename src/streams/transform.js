import path from 'path'
import zlib from 'zlib'
import { pipeline } from 'stream/promises';
import * as fs from "node:fs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const transform = async () => {

    const inputPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const outputPath = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const gZipStream = zlib.createGzip()

    try {
        await pipeline(readStream, gZipStream, writeStream);
        console.log('file was zipped successfully.');
    } catch (error) {console.error(error);}

};

await transform();