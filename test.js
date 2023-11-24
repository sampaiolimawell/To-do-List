// Importa o pool do arquivo db.js
const { pool } = require('./db');

async function adicionarTarefa() {
  try {
    // Tarefa que será adicionada ao banco
    const tarefa = 'Testar script de adição de tarefa';

    // Envia a tarefa para o banco de dados
    await pool.query('INSERT INTO tarefas (descricao) VALUES ($1)', [tarefa]);

    console.log('Tarefa adicionada com sucesso!');
  } catch (erro) {
    console.error('Erro ao adicionar tarefa:', erro.message);
  } finally {
    // Certifica-se de que a pool é fechada, encerrando a conexão com o banco de dados
    pool.end();
  }
}

// Chama a função para adicionar a tarefa
adicionarTarefa();
