import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.scss';

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
      className={({ isActive }) => (isActive ? classes.isActive : '')}
    >
      {leadIcon}
      {children}
      {trailIcon}
    </NavLink>
  );
};

export default NavbarItem;
