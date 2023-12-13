import { ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../constants/types';

type ActionButtonProps = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  );
};
export default ActionButton;
