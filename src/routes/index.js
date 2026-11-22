import express from "express";
import rotasLivro from "./livroRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Hello World");
    });
    app.use(express.json(), rotasLivro);
};

export default routes;