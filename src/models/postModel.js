import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente `STRING_CONEXAO`.
// A função `conectarAoBanco` retorna uma promise que é resolvida com a conexão ao banco de dados.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados.
export default async function getTodosPosts() {
  // Seleciona o banco de dados "imersao-instabytes".
  const db = conexao.db("imersao-instabytes");
  // Seleciona a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
  return colecao.find().toArray();
}
