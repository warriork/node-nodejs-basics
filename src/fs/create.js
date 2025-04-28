import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';

const create = async () => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const targetFile = path.join(__dirname, 'files', 'fresh.txt')

    if (fs.existsSync(targetFile)) {
        throw new Error(`FS operation failed`);
    } else {
        const content =  'I am fresh and young'
        try {
           await fsPromises.writeFile(targetFile, content, { encoding: 'utf8' })
        } catch (err) {
            console.error(err)
        }
    }};
await create();