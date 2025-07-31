import router from './routers.js';
import express from 'express';
import cors from 'cors';
import {logMW} from './MW.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(logMW)
app.use('/', router)

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));