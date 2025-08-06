import { Outlet } from 'react-router-dom';
import Navbar from '../../components/protected/guest/Navbar';
import Footer from '../../components/protected/guest/Footer';
import usePageTitle from '../../hooks/public/usePageTitle';

const GuestLayout = () => {
  usePageTitle();
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className='py-18'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default GuestLayout;