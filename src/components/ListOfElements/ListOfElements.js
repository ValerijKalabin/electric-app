import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Help from '../../buttons/Help/Help';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfElements.css';


function ListOfElements({ onClickButton }) {
  return (
    <ul className="elements">
      <li className="elements__item elements__item_help">
        <Help id='' listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="elements__item elements__item_auto-switch">
        <AutoSwitch id='' listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="elements__item elements__item_junction-box">
        <JunctionBox id='' listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="elements__item elements__item_lamp">
        <Lamp id='' listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="elements__item elements__item_socket">
        <Socket id='' listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="elements__item elements__item_switch">
        <Switch id='' listName="elements" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListOfElements;
