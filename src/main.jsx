
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import NameEntry from './NameEntry.jsx';
import DimensionsForm from './DimensionsForm.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/random" element={<NameEntry />} />
        <Route path="/random/dimensions" element={<DimensionsForm />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
