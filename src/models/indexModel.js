import logger from "../utils/logger";

class Index {
    constructor() {};

    greetMe(result) {
        logger.log(`[Index] Just a greeting, yay!`);
        result(null, { message: "Maybe aliens live amongst us, and one is reading this behind you" })
    }
}

export default new Index();