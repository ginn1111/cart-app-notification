import { useRef, useEffect } from 'react';

import NavbarItem from './Navbar/NavbarItem';
import Badge from '../Badge';

import { useAppSelector } from 'app/hooks';
import { cartItemsSelector } from 'app/cartSlice/selectors';

import './header.scss';

const NAV_ITEMS = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Cart', link: '/cart' },
  { id: 3, title: 'Camera', link: '/camera' },
];

const Header = () => {
  const cartItems = useAppSelector(cartItemsSelector);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    badgeRef?.current?.classList.add('badge__bums');
    const timerId = setTimeout(() => {
      if (badgeRef.current) {
        badgeRef.current.classList.remove('badge__bums');
        return () => clearTimeout(timerId);
      }
    }, 500);

    const badgeCleanup = badgeRef.current;

    return () => {
      if (badgeCleanup) {
        badgeCleanup.classList.remove('.badge__bums');
      }
    };
  }, [cartItems.length]);

  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          {NAV_ITEMS.map((nav) => (
            <NavbarItem key={nav.id} link={nav.link}>
              <p>{nav.title}</p>
              {nav.link === '/cart' && cartItems.length > 0 && (
                <Badge ref={badgeRef}>{cartItems.length}</Badge>
              )}
            </NavbarItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
