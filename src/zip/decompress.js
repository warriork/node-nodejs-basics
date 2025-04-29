import path from 'path'
import zlib from 'zlib'
import { pipeline } from 'stream/promises';
import * as fs from "node:fs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const decompress = async () => {

    const inputPath = path.join(__dirname, 'files', 'archive.gz');
    const outputPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const gunZipStream = zlib.createGunzip()

    try {
        await pipeline(readStream, gunZipStream, writeStream);
        console.log('file was unzipped successfully.');
    } catch (error) {console.error(error);}

};

await decompress();