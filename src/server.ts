import express, { request , response } from "express";

import './database';
import { routes } from "../route";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));