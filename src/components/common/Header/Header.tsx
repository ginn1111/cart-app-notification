import NavbarItem from './Navbar/NavbarItem';
import classes from './Header.module.scss';

const NAV_ITEMS = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Cart', link: '/cart' },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.header__nav}>
        <ul>
          {NAV_ITEMS.map((nav) => (
            <NavbarItem key={nav.id} link={nav.link}>
              <p>{nav.title}</p>
            </NavbarItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
