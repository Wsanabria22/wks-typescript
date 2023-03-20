import cookieParser from "cookie-parser";
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from 'morgan';
import cors from 'cors';
import config from "./lib/config";
import routes from './routes/index';

const app: Application = express();
app.use(express.urlencoded({extended:true, limit:"50mb"}));
app.use(express.json({ limit: "50mb"}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Request-with', 'Content-Type', 'Accept']
  })
);

interface error {
  status: number,
  message: string,
};

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.sendStatus(status).send(message);
})


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hola Typescript');
})

app.use('/api', routes)

export default app;
