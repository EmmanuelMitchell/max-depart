// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css';


// import Dashboard from './components/Dashboard';

// import WeeklyReport from './components/WeeklyReport';
// import MonthlyReport from './components/MonthlyReport';

// import Iframee from './components/Iframe';


// import FreetownEastAndroid from './components/freetowneast/FreetownEast-Android';
// import FreetownEastIphone from './components/freetowneast/FreetownEast-Iphone';
// import FreetownWestAndroid from './components/freetownwest/FreetownWest-Android';
// import FreetownWestIphone from './components/freetownwest/FreetownWest-Iphone';
// import EastAndroid from './components/east/East-Android';
// import EastIphone from './components/east/East-Iphone';
// import SouthAndroid from './components/south/South-Android';
// import SouthIphone from './components/south/South-Iphone';
// import NorthAndroid from './components/north/North-Android';
// import NorthIphone from './components/north/North-Iphone';
// import NorthWestAndroid from './components/northwest/NorthWest-Android';
// import NorthWestIphone from './components/northwest/NorthWest-Iphone';





// function App() {

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>

//           {/* Shop A */}
//           <Route path="/" element={<Dashboard />} />

//           <Route path="weeklyReport" element={<WeeklyReport />} />
//           <Route path="monthlyReport" element={<MonthlyReport />} />

//           <Route path="iframe" element={<Iframee />} />


//           <Route path="freetownEastAndroid" element={<FreetownEastAndroid />} />
//           <Route path="freetownEastIphone" element={<FreetownEastIphone />} />
//           <Route path="freetownWestAndroid" element={<FreetownWestAndroid />} />
//           <Route path="freetownWestIphone" element={<FreetownWestIphone />} />
//           <Route path="eastAndroid" element={<EastAndroid />} />
//           <Route path="eastIphone" element={<EastIphone />} />
//           <Route path="southAndroid" element={<SouthAndroid />} />
//           <Route path="southIphone" element={<SouthIphone />} />
//           <Route path="northAndroid" element={<NorthAndroid />} />
//           <Route path="northIphone" element={<NorthIphone />} />
//           <Route path="northWestAndroid" element={<NorthWestAndroid />} />
//           <Route path="northWestIphone" element={<NorthWestIphone />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';

import WeeklyReport from './components/WeeklyReport';
import MonthlyReport from './components/MonthlyReport';

import Iframee from './components/Iframe';


import DepartmentAndroid from './components/department/Department-Android'; // Added Department Android
import DepartmentIphone from './components/department/Department-Iphone'; // Added Department iPhone
import CommercialAndroid from './components/Commercial/CommercialIAndriod';
import CommercialIphone from './components/Commercial/CommercialIphone';
import CustomerExperienceAndroid from './components/CustomerExperience/CustomerExperince-Andriod';
import CustomerExperienceIphone from './components/CustomerExperience/CustomerExperince-Iphone';
import FinanceAndroid from './components/Finance/Finance-Andriod';
import FinanceIphone from './components/Finance/Finance-Iphone';
import FoundationAndroid from './components/Foundation/Foundation-Andriod';
import FoundationIphone from './components/Foundation/Foundation-Iphone';
import GIProgramAndroid from './components/GIAProgram/GIAProgramAndriod';
import GIProgramIphone from './components/GIAProgram/GIAprogramIphone';
import GSRoamingAndroid from './components/GSRoaming/GSRoamingAndroid';
import GSRoamingIphone from './components/GSRoaming/GSRoamingIphone';
import HRAndroid from './components/HR/HR-Andriod';
import HRIphone from './components/HR/HR-Iphone';
import ITAndNetworkAndroid from './components/ITAndNetwork/ITAndNetworkAndroid';
import ITAndNetworkIphone from './components/ITAndNetwork/ITAndNetworkIphone';
import MarketingAndroid from './components/Marketing/Marketing-Andriod';
import MarketingIphone from './components/Marketing/Marketing-Iphone';
import OrangeMoneyAndroid from './components/OrangeMoney/OrangeMoney-Android';
import OrangeMoneyIphone from './components/OrangeMoney/OrangeMoney-Iphone';
import PLDAndroid from './components/PLD/PLD-Andriod';
import PLDIphone from './components/PLD/PLD-Iphone';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Shop A */}
          <Route path="/" element={<Dashboard />} />

          <Route path="weeklyReport" element={<WeeklyReport />} />
          <Route path="monthlyReport" element={<MonthlyReport />} />

          <Route path="iframe" element={<Iframee />} />

          <Route path="commercialAndroid" element={<CommercialAndroid />} />
          <Route path="commercialIphone" element={<CommercialIphone />} />
          <Route path="customerExperienceAndroid" element={<CustomerExperienceAndroid />} />
          <Route path="customerExperienceIphone" element={<CustomerExperienceIphone />} />
          <Route path="financeAndroid" element={<FinanceAndroid />} />
          <Route path="financeIphone" element={<FinanceIphone />} />
          <Route path="foundationAndroid" element={<FoundationAndroid />} />
          <Route path="foundationIphone" element={<FoundationIphone />} />
          <Route path="giProgramAndroid" element={<GIProgramAndroid />} />
          <Route path="giProgramIphone" element={<GIProgramIphone />} />
          <Route path="gsRoamingAndroid" element={<GSRoamingAndroid />} />
          <Route path="gsRoamingIphone" element={<GSRoamingIphone />} />
          <Route path="hrAndroid" element={<HRAndroid />} />
          <Route path="hrIphone" element={<HRIphone />} />
          <Route path="hrIphone" element={<HRIphone />} />
          <Route path="itAndNetworkAndroid" element={<ITAndNetworkAndroid />} />
          <Route path="itAndNetworkIphone" element={<ITAndNetworkIphone />} />
          <Route path="marketingAndroid" element={<MarketingAndroid />} />
          <Route path="marketingIphone" element={<MarketingIphone />} />
          <Route path="orangeMoneyAndroid" element={<OrangeMoneyAndroid />} />
          <Route path="orangeMoneyIphone" element={<OrangeMoneyIphone />} />
          <Route path="pldAndroid" element={<PLDAndroid />} />
          <Route path="pldIphone" element={<PLDIphone />} />

          {/* Department */}
          <Route path="departmentAndroid" element={<DepartmentAndroid />} /> 
          <Route path="departmentIphone" element={<DepartmentIphone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
