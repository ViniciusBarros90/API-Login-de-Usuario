
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
  npm start
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

- Os testes utilizam Mocha, Chai, Sinon e SuperTest.
- Para rodar os testes:
  ```bash
  npm test
  ```

## Integração Contínua (CI)

O projeto está configurado com GitHub Actions para rodar os testes automaticamente a cada push ou pull request na branch `main`.
O workflow está em `.github/workflows/nodejs.yml`.

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
- O app pode ser importado separadamente para testes (SuperTest).
