import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logEvents = async (msg, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${msg}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fs.promises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        await fs.promises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (error) {
        console.error(error);
    }
};

export const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
};