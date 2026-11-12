import express from "express";

const app = express();
app.use(express.json());

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id === Number(id));
}

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

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Livro não encontrado"});
    }
    
    res.status(200).json(livros[index]);
});

export default app;