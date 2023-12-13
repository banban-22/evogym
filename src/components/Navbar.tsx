import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';
import { SelectedPage } from '../constants/types';
import Link from './Link';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from './ActionButton';

type NavbarProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  return (
    <nav>
      <div
        className={`${navbarBackground} flex items-center justify-between fixed top-0 z-30 w-full py-6`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            {/* Left */}
            <img src={Logo} alt="logo" />

            {/* Right */}
            {isAboveMediumScreen ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center justify-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-CSSFontFeatureValuesRule bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-full bg-primary-100  drop-shadow-xl">
          {/* Toggle Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
