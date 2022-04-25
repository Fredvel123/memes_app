import express from 'express';
const app = express();
// middlewares
app.use(express.json());
// settings
app.set('port', process.env.PORT || 8000);

export default app;
