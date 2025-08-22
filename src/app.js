// src/app.js
const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', loginRoutes);

module.exports = app;
