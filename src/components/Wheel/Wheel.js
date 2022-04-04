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
        <Help listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_auto-switch">
        <AutoSwitch listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_junction-box">
        <JunctionBox listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_lamp">
        <Lamp listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_socket">
        <Socket listName="elements" onClickButton={onClickButton} />
      </li>
      <li className="wheel__item  wheel__item_switch">
        <Switch listName="elements" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default Wheel;
