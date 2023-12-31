import { useEffect, useState } from 'react';
import { SelectedPage } from './constants/types';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import OurClasses from './pages/OurClasses';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
    </div>
  );
};
export default App;
