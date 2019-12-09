import dotenv from "dotenv";
import path from "path";
import winston from "winston";

const { combine, timestamp, json } = winston.format;

dotenv.config({
    path: path.join(__dirname, "../configs/.env")
});

class Logger {
    constructor(props) {
        let logFolder = path.join(__dirname, '../logs')

        this.logger = winston.createLogger({
            level: 'info',
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                json(),
            ),
            transports: [
                new winston.transports.File({
                    filename: `${logFolder}/error.log`,
                    level: 'error',
                    json: true,
                    maxsize: 268435456, // 2GB
                    maxFiles: 10,
                    colorize: true
                }),
                new winston.transports.File({
                    filename: `${logFolder}/info.log`,
                    level: 'info',
                    json: true,
                    maxsize: 268435456, // 2GB
                    maxFiles: 10,
                    colorize: true
                })
            ]
        })
        if (process.env.NODE_ENV !== 'production') {
            this.logger.add(new winston.transports.Console({
                format: winston.format.simple()
            }));
        }

    }

    log(message, level = 'info') {
        this.logger.log({
            level,
            message,
        })
    }
}

export default new Logger();