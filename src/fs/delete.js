import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const remove = async () => {
    const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    if (!fs.existsSync(fileToRemovePath)) {
        throw new Error(`FS operation failed`);
    }
    try {
        await fs.promises.unlink(fileToRemovePath);
        console.log(`file ${fileToRemovePath} removed`);
    } catch (e) {
        console.err(e)
    }


};

await remove();