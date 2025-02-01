import express from 'express';
import routerProducts  from './routes/product.routes';
import cors from 'cors';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors( { origin: 'http://localhost:5173' } ));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', routerProducts);

export default app;
