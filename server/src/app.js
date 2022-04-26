import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app = express();
// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
dotenv.config();
// settings
app.set('port', process.env.PORT || 8000);
// routers
import usersRouters from './server/users/routers/users.routers.js'
app.use('/users', usersRouters);


export default app;
