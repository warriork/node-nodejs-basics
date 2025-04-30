import { Worker } from 'node:worker_threads';
import os from 'node:os';
import * as path from "node:path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const workers = []
    const coresCount = os.cpus().length;
    for (let i = 0; i < coresCount; i++ ) {
        workers.push(
            new Promise((resolve, reject)=> {
                const worker  = new Worker(path.join(__dirname, 'worker.js'), {workerData: 10+i});

                worker.on('message', (data) => {
                    resolve({status:'resolved', data:data});
            })
                worker.on('error', (data) => {
                    resolve({status:'error', data:null});
            })
        }))
    }
    const results = await Promise.all(workers);
    console.log(results);

};

await performCalculations();