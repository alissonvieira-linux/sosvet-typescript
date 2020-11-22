import express from 'express';
import router from './routes';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

server.listen(3333, () => console.log("🔥 Server started at localhost:3333"));