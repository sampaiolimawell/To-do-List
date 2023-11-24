const express = require('express');
const cors = require('cors');  // Importe o pacote CORS
const { pool } = require('./db');

const app = express();
const port = 3000;

app.use(cors());  // Use o CORS antes das rotas
app.use(express.json());  // Substitua bodyParser por express.json()

app.post('/adicionar-tarefa', async (req, res) => {
  try {
    const { tarefa } = req.body;
    await pool.query('INSERT INTO tarefas (descricao) VALUES ($1)', [tarefa]);
    res.status(200).json({ mensagem: 'Tarefa adicionada com sucesso!' });
  } catch (erro) {
    console.error('Erro ao adicionar tarefa:', erro.message);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend está rodando em http://localhost:${port}`);
});
