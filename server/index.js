// Instanciar el servidor de Express
const express = require("express");

const { createServer } = require("http");

// Importar el servidor de Socket.io
const servidorRealtime = require("./servidor-tiempo-real");

// Para utilizar cookies en el servidor
const cookieParser = require("cookie-parser");

// Inicializar el servidor de Express
const app = express();
const httpServer = createServer(app);
//configuraciones
const PORT = 3000;
app.set("port", PORT);
app.use(cookieParser());

// Iniciar el servidor
httpServer.listen(PORT, () => {
    console.log("El servidor está corriendo en el puerto", PORT);
});

// Llamar al  servidor de Socket.io
servidorRealtime(httpServer);