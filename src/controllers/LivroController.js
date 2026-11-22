import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).json(livros);
        } catch (e) {
            res.status(500).json( { message: `${e.message} - Falha ao listar livros.` } );
        }
    }

    static async buscarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (e) {
            res.status(500).json( { message: `${e.message} - Falha ao buscar livro.` } );
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json( { message: "Livro cadastrado com sucesso.", livro: novoLivro } );
        } catch (e) {
            res.status(500).json( { message: `${e.message} - Falha ao cadastrar o livro.` } );
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json( { message: "Livro atualizado com sucesso." } );
        } catch (e) {
            res.status(500).json( { message: `${e.message} - Falha ao atualizar livro.` } );
        }
    }

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json( { message: "Livro excluído com sucesso." } );
        } catch (e) {
            res.status(500).json( { message: `${e.message} - Falha ao excluir livro.` } );
        }
    }
};

export default LivroController;