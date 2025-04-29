import fs, {promises as fsPromises} from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const list = async () => {
    const folderPath = path.join(__dirname, 'files')
    if (!fs.existsSync(folderPath)) {
        throw new Error(`FS operation failed`);
    }
    try {
    const files = await fsPromises.readdir(folderPath);
    if (files) {console.log(files)}
    } catch (e) {console.error(e)}
};

await list();