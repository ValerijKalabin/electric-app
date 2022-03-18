import { NavLink } from 'react-router-dom';
import './Header.css';

<NavLink className={(navData) => navData.isActive ? "active" : "" } to="/profile" />

function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              to="/sheme"
              className={
                (navData) => navData.isActive ?
                "header__link header__link_left header__link_active" :
                "header__link header__link_left"
              }
            >
              Схема
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              to="/list"
              className={
                (navData) => navData.isActive ?
                "header__link header__link_right header__link_active" :
                "header__link header__link_right"
              }
            >
              Список
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
