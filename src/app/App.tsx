import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GuestLayout from "./route/GuestLayout";
import LandingPage from "../pages/guest/beranda/Beranda";
import Kursus from "../pages/guest/kursus/KursusPage"; // Menggunakan punya teman karena mungkin itu yang terbaru
import CourseDetail from "../pages/guest/kursus/CourseDetail";
import Event from "../pages/guest/event/Event";
import DetailEvent from "../pages/guest/event/DetailEvent";
import Berita from "../pages/guest/berita/Berita"; // Menggunakan punya Anda karena lebih terstruktur
import DetailBerita from "../pages/guest/berita/DetailBerita";
import KelasIndustri from "../pages/guest/kelasindustri/KelasIndustri";
import Faq from "../pages/guest/Faq";
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
          <Route path="/" element={<LandingPage />} />

          <Route path="/kursus" element={<Kursus />} />
          <Route path="/kursus/:id" element={<CourseDetail />} />

          <Route path="/event" element={<Event />} />
          <Route path="/event/:id" element={<DetailEvent />} />

          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<DetailBerita />} />

          <Route path="/kelas-industri" element={<KelasIndustri />} />

          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;