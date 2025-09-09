import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GuestLayout from './route/GuestLayout';
import LandingPage from "../pages/guest/dashboard/Dashboard";
import Kursus from "../pages/guest/Course/CoursePage";
import Event from '../pages/guest/event/Event';
import Berita from "../pages/guest/news/News";
import KelasIndustri from '../pages/guest/kelasindustri/KelasIndustri';
import Faq from '../pages/guest/Faq';
import Spinner from "../components/public/Spinner";
import CourseDetail from '../pages/guest/Course/CourseDetail'
import DetailEvent from "../pages/guest/event/DetailEvent";
import Login from "../pages/guest/auth/login";
import Register from "../pages/guest/auth/register";
import AuthLayout from "./route/AuthLayout";
import ForgotPassword from "../pages/guest/auth/forgotpassword";
import UpdatePassword from '../pages/guest/auth/updatepassword';
import DetailBerita from "../pages/guest/news/NewsDetail";
import PaymentPage from "../components/payment/PaymentPage";
import usePageTitle from "../hooks/public/usePageTitle";

import Dashboard from "../pages/user/Dashboard";

function RouteChangeLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  usePageTitle();

  useEffect(() => {
    setLoading(true);
    setAnimateOut(false);

    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setLoading(false), 200);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <Spinner animateOut={animateOut} />;

  return (
    <Routes>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/email" element={<ForgotPassword />} />
        <Route path="/update-password/email" element={<UpdatePassword />} />
      </Route>

      <Route element={<GuestLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kursus" element={<Kursus />} />
        <Route path="/kursus/:id" element={<CourseDetail />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:slug" element={<DetailEvent />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:slug" element={<DetailBerita />} />
        <Route path="/kelas-industri" element={<KelasIndustri />} />
        <Route path="/faq" element={<Faq />} />


        <Route path="/dashboard-user" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <RouteChangeLoader />
    </Router>
  );
}

export default App;