const { Client } = require('pg');

// Configurações de conexão com o PostgreSQL
const client = new Client({
  host: 'localhost',       // Endereço do servidor
  port: 5433,              // Porta mapeada no docker-compose
  database: 'tasks',       // Nome do banco de dados
  user: 'postgres',        // Usuário
  password: 'password'     // Senha
});

// Função para testar a conexão
async function testConnection() {
  try {
    // Conecta ao banco de dados
    await client.connect();

    // Executa uma consulta simples
    const res = await client.query('SELECT version();');
    console.log('Conexão bem-sucedida ao PostgreSQL. Versão do DB:', res.rows[0].version);

  } catch (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err.message);
  } finally {
    // Fecha a conexão
    await client.end();
    console.log('Conexão fechada.');
  }
}

testConnection();
