import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';

const copy = async () => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const sourceFolder = path.join(__dirname, 'files');
    const targetFolder = path.join(__dirname, 'files_copy');

    if (fs.existsSync(targetFolder) || !fs.existsSync(sourceFolder)) {
        throw new Error(`FS operation failed`);
    }
    try {
        await fsPromises.mkdir(targetFolder);
        const files = await fsPromises.readdir(sourceFolder);

        await Promise.all(
            files.map(file => {
                const sourcePath = path.join(sourceFolder, file);
                const targetPath = path.join(targetFolder, file);
                return fsPromises.copyFile(sourcePath, targetPath);
            })
        );

    } catch (err) {
        console.error(err);
    }
};

await copy();
