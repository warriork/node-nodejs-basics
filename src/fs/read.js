import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
    if (!fs.existsSync(filePath)) {
        throw new Error(`FS operation failed`);
    }
    try {
        const fileContent = await fs.promises.readFile(filePath, 'utf8')
        console.log(fileContent)
    } catch (e) {console.error(e)}
};

await read();