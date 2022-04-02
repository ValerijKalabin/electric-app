import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Help from '../../buttons/Help/Help';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './Wheel.css';


function Wheel({ onClickButton }) {
  return (
    <ul className="wheel">
      <li className="wheel__item wheel__item_help">
        <Help id="help" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_auto-switch">
        <AutoSwitch id="auto-switch" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_junction-box">
        <JunctionBox id="junction-box" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_lamp">
        <Lamp id="lamp" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_socket">
        <Socket id="socket" listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_switch">
        <Switch id="switch" listName="elements" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default Wheel;
