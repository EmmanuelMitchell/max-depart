import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import CountResult from "./routes/CountResult.js"
import dotenv from 'dotenv'

import East from "./routes/East.js"
import FreetownWest from "./routes/FreetownEast.js"
import FreetownEast from "./routes/FreetownEast.js"
import South from "./routes/South.js"
import NorhtWest from "./routes/NorthWest.js"
import North from "./routes/North.js"


const app = express();
app.use(bodyParser.json());

dotenv.config()
const PORT = process.env.PORT || 4500;

app.use(cors());
app.use(express.json());
app.options("*", cors());

app.use(CountResult);

app.use(East);
app.use(FreetownWest);
app.use(FreetownEast);
app.use(South);
app.use(NorhtWest);
app.use(North);




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
