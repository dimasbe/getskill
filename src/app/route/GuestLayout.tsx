import { Outlet } from 'react-router-dom';
import Navbar from '../../components/protected/guest/Navbar';

const GuestLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;
