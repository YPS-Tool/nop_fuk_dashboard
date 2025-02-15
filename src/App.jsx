import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CompanyDetail from './pages/CompanyDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:companyId" element={<CompanyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
