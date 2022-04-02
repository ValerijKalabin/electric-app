import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import ListOfActions from '../ListOfActions/ListOfActions';
import Wheel from '../Wheel/Wheel';
import { getSchemeMarkup } from '../../utils/position';
import './Scheme.css';


function Scheme({
  pageHeight,
  selectedElement,
  elementList,
  onClickButton
}) {
  return (
    <main className="scheme" style={ getSchemeMarkup(pageHeight) }>
      { !elementList.length && <Wheel onClickButton={onClickButton} /> }
      { !!elementList.length &&
        <ul className="scheme__list" style={{ right: `${selectedElement.pagePosition}px` }}>
          { elementList.map((element) => (
            <li className="scheme__item" key={element.id} style={element.position}>
              { element.listName === 'actions' &&
                <ListOfActions elementID={element.id} elementName={element.name} onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'auto-switch' &&
                <AutoSwitch id={element.id} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'junction-box' &&
                <JunctionBox id={element.id} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'lamp' &&
                <Lamp id={element.id} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'socket' &&
                <Socket id={element.id} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'switch' &&
                <Switch id={element.id} listName="nolist" onClickButton={onClickButton} />
              }
            </li>
          ))}
        </ul>
      }
    </main>
  );
}

export default Scheme;
