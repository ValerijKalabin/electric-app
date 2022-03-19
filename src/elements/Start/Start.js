import AutoSwitch from '../AutoSwitch/AutoSwitch';
import JunctionBox from '../JunctionBox/JunctionBox';
import './Start.css';

function Start() {
  return (
    <div className="start">
      <h1 className="start__title">?</h1>
      <ul className="start__list">
        <li className="start__item start__item_auto-switch">
          <AutoSwitch />
        </li>
        <li className="start__item start__item_box">
          <JunctionBox />
        </li>
        <li className="start__item start__item_lamp">
          <svg width="60" height="60" fill="transparent" stroke="#d5d832" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="26" />
            <line x1="10" x2="50" y1="50" y2="10" />
            <line x1="10" x2="50" y1="10" y2="50" />
          </svg>
        </li>
        <li className="start__item start__item_socket">
          <svg width="60" height="60" fill="transparent" stroke="#d5d832" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="26" />
            <line x1="2" x2="16" y1="30" y2="30" />
            <line x1="32" x2="58" y1="30" y2="30" />
            <line x1="16" x2="26" y1="30" y2="20" />
            <line x1="16" x2="26" y1="30" y2="40" />
            <line x1="32" x2="42" y1="30" y2="20" />
            <line x1="32" x2="42" y1="30" y2="40" />
          </svg>
        </li>
        <li className="start__item start__item_switch">
          <svg width="60" height="60" fill="transparent" stroke="#d5d832" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="26" />
            <line x1="2" x2="20" y1="30" y2="30" />
            <line x1="20" x2="40" y1="30" y2="20" />
            <line x1="40" x2="58" y1="30" y2="30" />
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default Start;
