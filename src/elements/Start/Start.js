import AutoSwitch from '../AutoSwitch/AutoSwitch';
import Help from '../Help/Help';
import JunctionBox from '../JunctionBox/JunctionBox';
import Lamp from '../Lamp/Lamp';
import Socket from '../Socket/Socket';
import Switch from '../Switch/Switch';
import './Start.css';

function Start() {
  return (
    <ul className="start__list">
      <li className="start__item start__item_help">
        <Help color="gray" />
      </li>
      <li className="start__item start__item_auto-switch">
        <AutoSwitch color="yellow" />
      </li>
      <li className="start__item start__item_junction-box">
        <JunctionBox color="yellow" />
      </li>
      <li className="start__item start__item_lamp">
        <Lamp color="yellow" />
      </li>
      <li className="start__item start__item_socket">
        <Socket color="yellow" />
      </li>
      <li className="start__item start__item_switch">
        <Switch color="yellow" />
      </li>
    </ul>
  );
}

export default Start;
