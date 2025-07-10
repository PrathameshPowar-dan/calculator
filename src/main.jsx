// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'; // Main calculator
import SampoornaCalculator from './SampoornaCalculator.jsx'; // Your /random route

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/random" element={<SampoornaCalculator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
