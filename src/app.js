import express from "express";
import getDatabaseConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await getDatabaseConnection();

connection.on("error", (e) => {
    console.error("Falha ao tentar conectar com o banco!", e);
});

connection.once("open", () => {
    console.log("Conexão aberta com sucesso!");
});

const app = express();

routes(app);

export default app;