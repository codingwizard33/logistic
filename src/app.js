import "dotenv/config";
import express from "express";
import cors from "cors";

import dbConnect from "./config/database.js";
import web from "./routes/web.js";
import auth from "./routes/auth.js";
import api from "./routes/api.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

dbConnect();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));

app.use(web);
app.use('/auth', auth);
app.use('/api', authMiddleware, api);

app.listen(process.env.PORT || 3001, () => {
  console.log(`The server started on port ${ process.env.PORT || 3001 }.`);
});