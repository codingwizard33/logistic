import "dotenv/config";
import express from "express";
import cors from "cors";

import web from "./routes/web.js";

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));

app.use('/', web);

app.listen(process.env.PORT || 3001, () => {
  console.log(`The server started on port ${process.env.PORT || 3001}.`);
});