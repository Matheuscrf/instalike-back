// Framework para criar servidores web
import express from "express";
// Middleware para lidar com uploads de arquivos
import multer from "multer";
// Funções para controlar posts e uploads
import {
  listarPosts,
  postarNovoPost,
  uploadImagem, 
  atualizarNovoPost
} from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
}
const storage = multer.diskStorage({
  // biome-ignore lint/complexity/useArrowFunction: <explanation>
  destination: function (req, file, cb) {
    // Salva arquivos em uploads/
    cb(null, "uploads/");
  },
  // biome-ignore lint/complexity/useArrowFunction: <explanation>
  filename: function (req, file, cb) {
    // Mantém nome original do arquivo
    cb(null, file.originalname);
  },
});

// Configura upload de arquivos
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  // Habilita o middleware para entender JSON.
  app.use(express.json());
  // Habilita o middleware para entender requisições URL-encoded.
  app.use(cors(corsOptions));
  // Busca todos os posts
  app.get("/posts", listarPosts);
  // Rota para criar um post
  app.post("/posts", postarNovoPost);
  // Envia arquivo para uploadImagem
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
