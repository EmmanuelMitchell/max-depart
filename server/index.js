import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import CountResult from "./routes/CountResult.js"
import dotenv from 'dotenv'

import BoShop from "./routes/BoShop.js"
import HQShop from "./routes/HQShop.js"
import KenemaShop from "./routes/KenemaShop.js"
import KonoShop from "./routes/KonoShop.js"
import MakeniShop from "./routes/MakeniShop.js"
import FlagshipShop from "./routes/FlagshipShop.js"
import LungiShop from "./routes/LungiShop.js"
import WellingtonShop from "./routes/WellingtonShop.js"
import WaterlooShop from "./routes/WaterlooShop.js"

const app = express();
app.use(bodyParser.json());

dotenv.config()
const PORT = process.env.PORT || 4500;

app.use(cors());
app.use(express.json());
app.options("*", cors());

app.use(CountResult);

app.use(KenemaShop);
app.use(HQShop);
app.use(BoShop);
app.use(KonoShop);
app.use(MakeniShop);
app.use(FlagshipShop);


app.use(WellingtonShop);
app.use(LungiShop);
app.use(WaterlooShop);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
