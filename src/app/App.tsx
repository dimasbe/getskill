import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestLayout from './route/GuestLayout';
// import Dashboard from '../pages/guest/Dashboard';
import Kursus from '../pages/guest/kursus';
import Event from '../pages/guest/Event';
import Berita from '../pages/guest/Berita';
import HubKa from '../pages/guest/HubKa';
import Faq from '../pages/guest/Faq';
import Spinner from "../components/public/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setLoading(false), 200);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner animateOut={animateOut} />;

  return (
    <Router>
      <Routes>
        <Route element={<GuestLayout />}>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/kursus" element={<Kursus />} />
          <Route path="/event" element={<Event />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/hubungi" element={<HubKa />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
