import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';


import Dashboard from './components/Dashboard';

import WeeklyReport from './components/WeeklyReport';
import MonthlyReport from './components/MonthlyReport';

import Iframee from './components/Iframe';


import FreetownEastAndroid from './components/freetowneast/FreetownEast-Android';
import FreetownEastIphone from './components/freetowneast/FreetownEast-Iphone';
import FreetownWestAndroid from './components/freetownwest/FreetownWest-Android';
import FreetownWestIphone from './components/freetownwest/FreetownWest-Iphone';
import EastAndroid from './components/east/East-Android';
import EastIphone from './components/east/East-Iphone';
import SouthAndroid from './components/south/South-Android';
import SouthIphone from './components/south/South-Iphone';
import NorthAndroid from './components/north/North-Android';
import NorthIphone from './components/north/North-Iphone';
import NorthWestAndroid from './components/northwest/NorthWest-Android';
import NorthWestIphone from './components/northwest/NorthWest-Iphone';





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


          <Route path="freetownEastAndroid" element={<FreetownEastAndroid />} />
          <Route path="freetownEastIphone" element={<FreetownEastIphone />} />
          <Route path="freetownWestAndroid" element={<FreetownWestAndroid />} />
          <Route path="freetownWestIphone" element={<FreetownWestIphone />} />
          <Route path="eastAndroid" element={<EastAndroid />} />
          <Route path="eastIphone" element={<EastIphone />} />
          <Route path="southAndroid" element={<SouthAndroid />} />
          <Route path="southIphone" element={<SouthIphone />} />
          <Route path="northAndroid" element={<NorthAndroid />} />
          <Route path="northIphone" element={<NorthIphone />} />
          <Route path="northWestAndroid" element={<NorthWestAndroid />} />
          <Route path="northWestIphone" element={<NorthWestIphone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
