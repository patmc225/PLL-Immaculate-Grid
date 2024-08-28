import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Daily from './Daily';
import Unlimited from './Unlimited';

import ReactGA from "react-ga4";
ReactGA.initialize("G-HYTBWB2736");
ReactGA.send({ hitType: "pageview", page: "/PLL-Immaculate-Grid", title: "Daily" });
ReactGA.send({ hitType: "pageview", page: "/PLL-Immaculate-Grid/Unlimited", title: "Unlimited" });

const App = () => {
  return (
    <Router>
      
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Routes style={{ flexGrow: 1 }}>
          <Route path="/PLL-Immaculate-Grid/Unlimited" element={<Unlimited />} />
          <Route path="/PLL-Immaculate-Grid" element={<Daily />} /> {/* Default route */}
        </Routes>    
      </div>
    </Router>
  );
};

export default App;