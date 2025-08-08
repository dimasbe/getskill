import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../components/public/Spinner";
import Navbar from '../../components/protected/guest/Navbar';
import Footer from '../../components/protected/guest/Footer';
import usePageTitle from '../../hooks/public/usePageTitle';
import ScrollToTopButton from '../../components/public/ScrollToTopButton';

const GuestLayout = () => {
  usePageTitle();
    const location = useLocation();
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setLoadingPage(true);
    const timer = setTimeout(() => {
      setLoadingPage(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loadingPage) return <Spinner animateOut={false} />;
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className='pt-18'>
        <ScrollToTopButton />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default GuestLayout;