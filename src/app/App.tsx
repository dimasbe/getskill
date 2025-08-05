import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './route/MainLayout';
import Dashboard from '../pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route utama (dengan layout) */}
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
