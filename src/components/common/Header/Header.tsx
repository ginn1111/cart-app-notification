import NavbarItem from './Navbar/NavbarItem';
import Badge from '../Badge';
import classes from './Header.module.scss';
import { useAppSelector } from 'app/hooks';
import { cartItemsSelector } from 'app/cartSlice/selectors';

const NAV_ITEMS = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Cart', link: '/cart' },
  { id: 3, title: 'Camera', link: '/camera' },
];

const Header = () => {
  const cartItems = useAppSelector(cartItemsSelector);

  return (
    <header className={classes.header}>
      <nav className={classes.header__nav}>
        <ul>
          {NAV_ITEMS.map((nav) => (
            <NavbarItem key={nav.id} link={nav.link}>
              <p>{nav.title}</p>
              {nav.link === '/cart' && cartItems.length > 0 && (
                <Badge>{cartItems.length}</Badge>
              )}
            </NavbarItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
