import fs from 'fs';
import path from 'path';

const rename = async () => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const fileToRename = path.join(__dirname, 'files', 'wrongFilename.txt');
    const renamedFile = path.join(__dirname, 'files', 'properFilename.md');
    if (fs.existsSync(renamedFile) || !fs.existsSync(fileToRename)) {
        throw new Error(`FS operation failed`);
    }
    try {
       await fs.promises.rename(fileToRename, renamedFile)
    } catch (e) {console.err(e)}


};

await rename();