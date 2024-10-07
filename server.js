const express = require('express');
const path = require('path');
const app = express();

// Sirve archivos estáticos desde el directorio raíz
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Asegúrate de que 'index.html' esté en el directorio raíz
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

