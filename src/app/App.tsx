import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GuestLayout from './route/GuestLayout';
import LandingPage from "../pages/guest/dashboard/Dashboard";
import Kursus from "../pages/guest/Course/CoursePage";
import Event from '../pages/guest/event/Event';
import KelasIndustri from '../pages/guest/kelasindustri/KelasIndustri';
import FaqPage from "../pages/guest/faq/FaqPage";
import FaqDetailPage from "../pages/guest/faq/FaqDetailPage";
import FaqCategoryDetailPage from "../pages/guest/faq/FaqCategoryDetailPage";
import Spinner from "../components/public/Spinner";
import CourseDetail from '../pages/guest/Course/CourseDetail'
import EventDetails from "../pages/guest/event/EventDetails";
import Login from "../pages/guest/auth/login";
import Register from "../pages/guest/auth/register";
import AuthLayout from "./route/AuthLayout";
import ForgotPassword from "../pages/guest/auth/forgotpassword";
import UpdatePassword from '../pages/guest/auth/updatepassword';
import PaymentPage from "../components/payment/PaymentPage";
import usePageTitle from "../hooks/public/usePageTitle";
import Dashboard from "../pages/user/Dashboard";
import ContactPage from "../pages/guest/contact/ContactPage";
import NewsDetail from "../pages/guest/news/NewsDetail";
import News from "../pages/guest/news/News";

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
        <Route path="/event/:slug" element={<EventDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
        <Route path="/kelas-industri" element={<KelasIndustri />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faq/:id" element={<FaqDetailPage />} />
        <Route path="/faq/category/:id" element={<FaqCategoryDetailPage />} />
        <Route path="/dashboard-user" element={<Dashboard />} />
        <Route path="/contact" element={<ContactPage />} />
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