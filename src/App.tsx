import { useEffect, useState } from 'react';
import { SelectedPage } from './constants/types';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './components/Contact';
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
      <Navbar />
      <Home setSelectedPage={setSelectedPage} />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
