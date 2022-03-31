import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              to="/scheme"
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
              to="/"
              className={
                (navData) => navData.isActive ?
                "header__link_center header__link_active" :
                "header__link_center"
              }
            >
              <svg className="bi bi-info" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#bbbbbb" viewBox="0 0 16 16">
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
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
