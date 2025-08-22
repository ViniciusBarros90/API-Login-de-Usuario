# Login API

API simples de login com Express, separando camadas de Controller, Service e Model. Documentação disponível via Swagger.

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando a API

- Para rodar o servidor:
  ```bash
  node src/server.js
  ```
- Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Estrutura do Projeto

- `src/models/` - Modelos e simulação de dados
- `src/services/` - Lógica de autenticação
- `src/controllers/` - Controller de login
- `src/routes/` - Rotas da API
- `src/docs/` - Documentação Swagger
- `src/app.js` - App Express (sem listen)
- `src/server.js` - Inicialização do servidor
- `tests/` - Testes automatizados

## Testes Automatizados

- Os testes utilizam Jest e Supertest.
- Para rodar os testes:
  ```bash
  npm test
  ```

## Exemplo de Requisição

```
POST /login
Content-Type: application/json
{
  "username": "admin",
  "password": "admin123"
}
```

## Notas
- O endpoint `/api-docs` exibe a documentação Swagger.
- O app pode ser importado separadamente para testes (Supertest).
