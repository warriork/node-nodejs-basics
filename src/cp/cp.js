import {fork} from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const processPath = path.join(__dirname,'files', 'script.js');
const spawnChildProcess = async (args) => {
fork(processPath, args)
};

spawnChildProcess( ['Hello', 'world']);
