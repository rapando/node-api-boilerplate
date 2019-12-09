import dotenv from "dotenv";
import errorHandler from "errorhandler";
import morgan from "morgan";
import path from "path";
import rfs from "rotating-file-stream";
let handler = null,
    fnParam = null,
    options = null;


dotenv.config({
    path: path.join(__dirname, "../configs/.env")
});




// create a rotating filestream
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    const errorLog = rfs(`_error.log`, {
        interval: '1s', // rotate daily
        path: path.join(__dirname, "logs")
    })

    fnParam = 'combined';
    options = {
        skip: (req, res) => {
            return res.statusCode < 400
        },
        stream: errorLog
    };

    handler = morgan;
} else handler = errorHandler

export default handler(fnParam, options)