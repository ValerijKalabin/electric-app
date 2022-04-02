import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Cable from '../../buttons/Cable/Cable';
import Help from '../../buttons/Help/Help';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfElements.css';


function ListOfElements({ someElement, onClickButton }) {
  return (
    <ul className={`elements ${!someElement ? 'elements_start' : ''}`}>
      <li className={`elements__item ${!someElement ? 'elements__item_start elements__item_help' : ''}`}>
        <Help id="help" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className={`elements__item ${!someElement ? 'elements__item_start elements__item_auto-switch' : ''}`}>
        <AutoSwitch id="auto-switch" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className={`elements__item ${!someElement ? 'elements__item_start elements__item_junction-box' : ''}`}>
        <JunctionBox id="junction-box" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className={`elements__item ${!someElement ? 'elements__item_start elements__item_lamp' : ''}`}>
        <Lamp id="lamp" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className={`elements__item ${!someElement ? 'elements__item_start elements__item_socket' : ''}`}>
        <Socket id="socket" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className={`elements__item ${!someElement ? 'elements__item_start elements__item_switch' : ''}`}>
        <Switch id="switch" listName="elements" onClickButton={onClickButton} />
      </li>
      { someElement &&
        <li className="elements__item">
          <Cable id="cable" listName="hints" onClickButton={onClickButton} />
        </li>
      }
    </ul>
  );
}

export default ListOfElements;
