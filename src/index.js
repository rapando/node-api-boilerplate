import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { router } from "./router";
import logger from "./utils/logger";
import requestHandler from "./utils/requestHandler";

dotenv.config({
    path: path.join(__dirname, "configs/.env"),
});

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(requestHandler);

app.listen(port, () => logger.log(`[App] Started on port ${port}`, 'info'));

router(app);