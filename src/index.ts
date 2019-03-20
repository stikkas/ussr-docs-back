import express from 'express';
import mkdirp from 'mkdirp';
import winston from 'winston';
import {Routes} from './routes';

const app = express();
const port = 8080;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'ussr'},
    transports: []
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({format: winston.format.simple()}));
} else {
    mkdirp('logs', (err) => {
    });

    logger.add(new winston.transports.File({filename: 'logs/error.log', level: 'error'}));
    logger.add(new winston.transports.File({filename: 'logs/combined.log'}));
}

Routes.initRoutes(app);

app.listen(port, () => {
    logger.info(`server started at http://localhost:${port}`);
});

