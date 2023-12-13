import { SelectedPage } from '../constants/types';
import Logo from '../assets/Logo.png';
import Link from './Link';

type FooterProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: FooterProps) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5"></p>
          <p>&copy; 2023 EVOGYM All Rights Reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0 flex flex-col gap-6">
          <h4 className="font-bold">Links</h4>
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
          {/* <p className="my-5">Benefits</p>
          <p className="my-5">Our Classes</p> */}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">evogym@test.com</p>
          <p className="my-5">(111) 111 - 1111</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
