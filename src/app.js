import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "2001: Uma Odisséia no Espaço"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;