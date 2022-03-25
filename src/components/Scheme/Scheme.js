import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import ListOfActions from '../ListOfActions/ListOfActions';
import ListOfElements from '../ListOfElements/ListOfElements';
import './Scheme.css';

function Scheme({ elementList, onClickButton }) {
  return (
    <main className="scheme">
      <ul className="scheme__list">
        {elementList.map((element) => (
          <li className="scheme__item" key={element.id}>
            { element.listName === 'elements' && <ListOfElements onClickButton={onClickButton} /> }
            { element.listName === 'actions' && <ListOfActions elementName={element.name} onClickButton={onClickButton} /> }
            { element.listName === 'nolist' && element.name === 'auto-switch' && <AutoSwitch listName="nolist" onClickButton={onClickButton} /> }
            { element.listName === 'nolist' && element.name === 'junction-box' && <JunctionBox listName="nolist" onClickButton={onClickButton} /> }
            { element.listName === 'nolist' && element.name === 'lamp' && <Lamp listName="nolist" onClickButton={onClickButton} /> }
            { element.listName === 'nolist' && element.name === 'socket' && <Socket listName="nolist" onClickButton={onClickButton} /> }
            { element.listName === 'nolist' && element.name === 'switch' && <Switch listName="nolist" onClickButton={onClickButton} /> }
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Scheme;
