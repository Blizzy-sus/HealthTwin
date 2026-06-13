import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LogMetrics from './pages/LogMetrics';
import TwinStatus from './pages/TwinStatus';
import Reports from './pages/Reports';
import FamilyGuardian from './pages/FamilyGuardian';
import Simulator from './pages/Simulator';

function Home() {
  return (
    <div className="min-h-screen bg-[#17130f] text-[#ebe1da] p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-[#d9c5b2]">Health Twin AI</h1>
      <div className="flex flex-col gap-4">
        <Link to="/dashboard" className="bg-[#f6e1cd] text-[#3a2e21] px-6 py-3 rounded-lg text-center font-bold">Dashboard</Link>
        <Link to="/status" className="bg-[#f6e1cd] text-[#3a2e21] px-6 py-3 rounded-lg text-center font-bold">Twin Status</Link>
        <Link to="/metrics" className="bg-[#f6e1cd] text-[#3a2e21] px-6 py-3 rounded-lg text-center font-bold">Log Metrics</Link>
        <Link to="/reports" className="bg-[#f6e1cd] text-[#3a2e21] px-6 py-3 rounded-lg text-center font-bold">Reports</Link>
        <Link to="/simulator" className="bg-[#f6e1cd] text-[#3a2e21] px-6 py-3 rounded-lg text-center font-bold">Simulator</Link>
        <Link to="/family" className="bg-[#f6e1cd] text-[#3a2e21] px-6 py-3 rounded-lg text-center font-bold">Family Guardian</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/status" element={<TwinStatus />} />
        <Route path="/metrics" element={<LogMetrics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/family" element={<FamilyGuardian />} />
      </Routes>
    </Router>
  );
}
