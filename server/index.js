import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import CountResult from "./routes/CountResult.js";
import dotenv from 'dotenv';

// Importing the specific routes
import CommercialAndriod from "./routes/CommercialIAndriod.js";
import CommercialIphone from "./routes/CommercialIPhone.js";
import GIAProgramsAndriod from "./routes/GIAProgramsAndriod.js";
import GIAProgramsIphone from "./routes/GIAProgramsIphone.js";
import MarketingAndriod from "./routes/MarketingAndriod.js";
import MarketingIphone from "./routes/MarketingIphone.js";
import GSRoamingAndriod from "./routes/GSRoamingAndriod.js";
import GSRoamingIphone from "./routes/GSRoamingIphone.js";
import CustomerExperienceIphone from "./routes/CutomerExperienceIphone.js";
import CustomerExperienceAndriod from "./routes/CutomerExperienceAndriod.js";
import FinanceIphone from "./routes/FinanceIphone.js";
import FinanceAndriod from "./routes/FinanceAndriod.js";
import PLDIphone from "./routes/PLDIphone.js";
import PLDAndriod from "./routes/PLDAndriod.js";
import HRDepartmentIphone from "./routes/HRIphone.js";
import HRDepartmentAndriod from "./routes/HRAndriod.js";
import OrangeMoneyIphone from "./routes/OrangeMoney-Iphone.js";
import OrangeMoneyAndriod from "./routes/OrangeMoney-Andriod.js";
import FoundationDepartmentIphone from "./routes/FoundationIphone.js";
import FoundationDepartmentAndriod from "./routes/FoundationAndriod.js";
import ITDepartmentIphone from "./routes/itnetwork-iphone.js";
import ITDepartmentAndriod from "./routes/itnetwork-android.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 4600;

app.use(cors());
app.use(express.json());
app.options("*", cors());

// Use the imported routes
app.use(CountResult);
app.use(CommercialIphone);
app.use(CommercialAndriod);
app.use(GIAProgramsAndriod);
app.use(GIAProgramsIphone)
app.use(MarketingIphone);
app.use(MarketingAndriod);
app.use(GSRoamingIphone);
app.use(GSRoamingAndriod);
app.use(CustomerExperienceIphone);
app.use(CustomerExperienceAndriod);
app.use(FinanceIphone);
app.use(FinanceAndriod)
app.use(PLDIphone);
app.use(PLDAndriod);
app.use(HRDepartmentIphone);
app.use(HRDepartmentAndriod);
app.use(OrangeMoneyIphone);
app.use(OrangeMoneyAndriod);
app.use(FoundationDepartmentIphone);
app.use(FoundationDepartmentAndriod)
app.use(ITDepartmentIphone);
app.use(ITDepartmentAndriod)

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
