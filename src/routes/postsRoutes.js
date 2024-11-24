// Framework para criar servidores web
import express from "express";
// Middleware para lidar com uploads de arquivos
import multer from "multer";
// Funções para controlar posts e uploads
import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
} from "../controllers/postsController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Salva arquivos em uploads/
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Mantém nome original do arquivo
    cb(null, file.originalname);
  },
});

// Configura upload de arquivos
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  // Habilita o middleware `express.json()` para que a aplicação possa entender requisições com corpo   em formato JSON.
  app.use(express.json());
  // Busca todos os posts
  app.get("/posts", listarPosts);
  // Rota para criar um post
  app.post("/posts", postarNovoPost);
  // Envia arquivo para uploadImagem
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
