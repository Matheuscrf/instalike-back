import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do Express, que será o ponto de partida para a nossa aplicação.
const app = express();
// Servir arquivos estáticos da pasta uploads
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
