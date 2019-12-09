import indexModel from "../models/indexModel";
import logger from "../utils/logger";

export const greetMe = (req, res) => {
    logger.log(`[Index] Just greetings, controller...`, 'info');
    indexModel.greetMe((error, data) => {
        error ?
            res.status(400).json({ err }) :
            res.status(200).json(data)
    });

}