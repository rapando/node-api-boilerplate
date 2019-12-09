import * as index from "./controllers/indexController";

export const router = app => {
    app.route("/")
        .get(index.greetMe)
        .post(index.greetMe);
}