import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Help from '../../buttons/Help/Help';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListElements.css';

function ListElements({ onClickHelp }) {
  return (
    <ul className="elements">
      <li className="elements__item elements__item_help">
        <Help listName="elements" onClickHelp={onClickHelp} />
      </li>
      <li className="elements__item elements__item_auto-switch">
        <AutoSwitch listName="elements" />
      </li>
      <li className="elements__item elements__item_junction-box">
        <JunctionBox listName="elements" />
      </li>
      <li className="elements__item elements__item_lamp">
        <Lamp listName="elements" />
      </li>
      <li className="elements__item elements__item_socket">
        <Socket listName="elements" />
      </li>
      <li className="elements__item elements__item_switch">
        <Switch listName="elements" />
      </li>
    </ul>
  );
}

export default ListElements;
