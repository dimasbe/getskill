import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (customTitle?: string) => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = 'GetSkill.id';

    const pathTitles: Record<string, string> = {
      '/': 'GetSkill.id - Get Your Skill',
      '/kursus': 'Kursus',
      '/event': 'Event',
      '/kelas-industri': 'Kelas Industri',
      '/berita': 'Berita',
      '/faq': 'FAQ',
    };

    const currentPath = location.pathname.toLowerCase();
    const routeTitle = pathTitles[currentPath];

    if (currentPath === '/') {
      document.title = pathTitles['/'];
    } else if (customTitle) {
      document.title = `${customTitle} - ${baseTitle}`;
    } else if (routeTitle) {
      document.title = `${routeTitle} - ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }
  }, [location, customTitle]);
};

export default usePageTitle;
