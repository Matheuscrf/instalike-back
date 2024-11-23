import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
  // Habilita o middleware `express.json()` para que a aplicação possa entender requisições com corpo   em formato JSON.
  app.use(express.json());
  // Define uma rota GET para o caminho "/posts".
  app.get("/posts", listarPosts);
};

export default routes;
