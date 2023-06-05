import io from 'socket.io-client';

// Conectar con el servidor de Socket.io
const socket = io('http://localhost:3000');

export default socket;