import express, { urlencoded } from "express";
import cors from 'cors';
import helmet from 'helmet';
import { mainRouter } from './routers/main';
import 'dotenv/config';

const server = express();
server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json());

server.use(mainRouter);

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on ${process.env.BASE_URL}`);
});