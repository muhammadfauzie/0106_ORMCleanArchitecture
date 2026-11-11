const express = require('express');
const connectDatabase = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('Isi apiRoutes:', apiRoutes);
console.log('Tipe apiRoutes:', typeof apiRoutes);

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();