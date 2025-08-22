// tests/controllers/loginController.test.js
const request = require('supertest');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../src/app');
const loginService = require('../../src/services/loginService');

describe('Login Controller', function () {
  let authenticateServiceMock;

  afterEach(function () {
    if (authenticateServiceMock) authenticateServiceMock.restore();
  });

  it('deve retornar 400 se username ou password não forem enviados', async function () {
    const res = await request(app)
        .post('/login')
        .send({ 
            username: 'admin' 
        });
    
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('Username and password are required.');
  });

  it('deve retornar 401 se as credenciais forem inválidas', async function () {
    authenticateServiceMock = sinon.stub(loginService, 'authenticate').returns(null);
    const res = await request(app)
        .post('/login')
        .send({ 
            username: 'admin', 
            password: 'wrong' 
        });
    
    expect(res.status).to.equal(401);
    expect(res.body.message).to.equal('Invalid credentials');
  });

  it('deve retornar 200 e o usuário se as credenciais forem válidas', async function () {
    authenticateServiceMock = sinon.stub(loginService, 'authenticate').returns({ id: 1, username: 'admin' });
    const res = await request(app)
    .post('/login')
    .send({ 
        username: 'admin', password: 'admin123' });
    expect(res.status).to.equal(200);
    expect(res.body.user).to.deep.equal({ id: 1, username: 'admin' });
  });

  it('deve chamar o service com os parâmetros corretos', async function () {
    
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'admin123' });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Login successful');
    
  });

  it('deve retornar 400 se o body estiver vazio', async function () {
    const res = await request(app).post('/login').send({});
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('Username and password are required.');
  });
});
