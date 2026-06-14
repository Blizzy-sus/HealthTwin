import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TwinStatusPage from './pages/TwinStatus';
import LogMetricsPage from './pages/LogMetrics';
import ReportsPage from './pages/Reports';
import SimulatorPage from './pages/Simulator';
import FamilyGuardianPage from './pages/FamilyGuardian';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/status" element={<TwinStatusPage />} />
        <Route path="/metrics" element={<LogMetricsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/simulator" element={<SimulatorPage />} />
        <Route path="/family" element={<FamilyGuardianPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
