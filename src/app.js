const express = require('express');
const cors = require('cors');

//routes
const usersRouter = require('./routes/user.routes');
const transfersRoutes = require('./routes/transfers.routes');
const app = express();

app.use(express.json());
app.use(cors());

//rutas
app.use('/api/vi/users', usersRouter);
app.use('/api/v1/transfers', transfersRoutes);

module.exports = app;
