import AutoSwitch from '../../icons/AutoSwitch/AutoSwitch';
import Help from '../../icons/Help/Help';
import JunctionBox from '../../icons/JunctionBox/JunctionBox';
import Lamp from '../../icons/Lamp/Lamp';
import Socket from '../../icons/Socket/Socket';
import Switch from '../../icons/Switch/Switch';
import './Elements.css';

function Elements({ onClickHelp }) {
  return (
    <ul className="elements">
      <li className="elements__item elements__item_help">
        <Help type="element" onClickHelp={onClickHelp} />
      </li>
      <li className="elements__item elements__item_auto-switch">
        <AutoSwitch color="yellow" />
      </li>
      <li className="elements__item elements__item_junction-box">
        <JunctionBox color="yellow" />
      </li>
      <li className="elements__item elements__item_lamp">
        <Lamp color="yellow" />
      </li>
      <li className="elements__item elements__item_socket">
        <Socket color="yellow" />
      </li>
      <li className="elements__item elements__item_switch">
        <Switch color="yellow" />
      </li>
    </ul>
  );
}

export default Elements;
