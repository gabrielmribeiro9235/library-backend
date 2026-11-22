import express from "express";
import LivroController from "../controllers/LivroController.js";

const rotasLivro = express.Router();

rotasLivro.get("/livros", LivroController.listarLivros);
rotasLivro.get("/livros/:id", LivroController.buscarLivroPorId);
rotasLivro.post("/livros", LivroController.cadastrarLivro);
rotasLivro.put("/livros/:id", LivroController.atualizarLivro);
rotasLivro.delete("/livros/:id", LivroController.excluirLivro);

export default rotasLivro;