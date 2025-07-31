import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const pool = new Pool({
    user: process.env.DB_USER, // имя пользователя
    host: process.env.DB_HOST, // адрес сервера
    database: process.env.DB_NAME, // название БД
    password: process.env.DB_PW, // пароль
    port: process.env.DB_PORT, // стандартный порт PostgreSQL
});

export default pool;
