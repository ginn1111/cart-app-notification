import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './navbarItem.scss';

type NavbarItemProps = {
  link: string;
  children: ReactNode;
  leadIcon?: ReactNode;
  trailIcon?: ReactNode;
};

const NavbarItem = ({
  link,
  children,
  leadIcon,
  trailIcon,
}: NavbarItemProps) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        (isActive ? 'nav-item--active' : '') + ' nav-item'
      }
    >
      {leadIcon}
      {children}
      {trailIcon}
    </NavLink>
  );
};

export default NavbarItem;
