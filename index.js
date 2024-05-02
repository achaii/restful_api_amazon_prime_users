const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = 'http://localhost';

const Users = require('./routes/users.route');

app.use(express.json());

app.use('/', Users);

app.listen(PORT, () => {
    console.log(`Server is running ${HOST}:${PORT}`);
});

module.exports = app;