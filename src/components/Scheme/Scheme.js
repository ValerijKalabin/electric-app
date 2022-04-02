import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import ListOfActions from '../ListOfActions/ListOfActions';
import Wheel from '../Wheel/Wheel';
import { getSchemeMarkup, getSchemeHeight } from '../../utils/position';
import './Scheme.css';


function Scheme({
  pageHeight,
  selectedElement,
  someElement,
  elementList,
  onClickButton
}) {
  return (
    <main className="scheme" style={ getSchemeMarkup(pageHeight, someElement) }>
      { !elementList.length && <Wheel onClickButton={onClickButton} /> }
      { !!elementList.length &&
        <ul className="scheme__list" style={{ right: `${selectedElement.pagePosition}px`, height: getSchemeHeight(someElement) }}>
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
      { someElement &&
        <div className="scheme__mark">
          <svg className="scheme__image" width="30" height="15" fill="transparent" stroke="#d5d832" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" x2="30" y1="14" y2="14" />
            <line x1="15" x2="15" y1="0" y2="15" />
          </svg>
        </div>
      }
    </main>
  );
}

export default Scheme;
