import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mens from './components/mens';
import Womens from './components/womens';
import Kids from './components/kids';
import Hoodies from './components/hoodies';
import AirForce1 from './components/airForce1s';
import Jordan4 from './components/jordan4s';
import NewBalances from './components/newBalances';



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/hoodies" element={<Hoodies />} />
      <Route path="/airForce1s" element={<AirForce1 />} />
      <Route path="/jordan4s" element={<Jordan4 />} />
      <Route path="/newBalances" element={<NewBalances />} />
    </Routes>
  </BrowserRouter>
);