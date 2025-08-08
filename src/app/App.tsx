import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestLayout from './route/GuestLayout';
import LandingPage from "../pages/guest/beranda/Beranda";
import Kursus from '../pages/guest/kursus/Kursus';
import Event from '../pages/guest/event/Event';
import Berita from '../pages/guest/Berita';
import KelasIndustri from '../pages/guest/KelasIndustri';
import Faq from '../pages/guest/Faq';
import Spinner from "../components/public/Spinner";
import CourseDetail from '../pages/guest/kursus/CourseDetail'


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
          <Route path="/" element={<LandingPage />} />
          <Route path="/kursus" element={<Kursus />} />
          <Route path="/event" element={<Event />} />
          <Route path="/kelas-industri" element={<KelasIndustri />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/kursus/:id" element={<CourseDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
