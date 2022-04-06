import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import CableLine from '../CableLine/CableLine';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import ListOfActions from '../ListOfActions/ListOfActions';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import Wheel from '../Wheel/Wheel';
import { getSchemeMarkup } from '../../utils/position';
import './Scheme.css';


function Scheme({
  pageHeight,
  centralElement,
  elementList,
  onClickButton
}) {
  return (
    <main className="scheme" style={ getSchemeMarkup(pageHeight) }>
      { !elementList.length && <Wheel onClickButton={onClickButton} /> }
      { !!elementList.length &&
        <ul className="scheme__list" style={{ right: `${centralElement.pagePosition}px` }}>
          { elementList.map((element) => (
            <li
              className={`scheme__item ${element.name === 'cable' ? 'scheme__item_cable' : ''}`}
              key={element.id}
              style={element.position}
            >
              { (element.listName === 'motion' || element.listName === 'cable') &&
                <ListOfActions element={element} onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'auto-switch' &&
                <AutoSwitch element={element} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'junction-box' &&
                <JunctionBox element={element} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'lamp' &&
                <Lamp element={element} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'socket' &&
                <Socket element={element} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'switch' &&
                <Switch element={element} listName="nolist" onClickButton={onClickButton} />
              }
              { element.listName === 'nolist' && element.name === 'cable' &&
                <CableLine element={element} />
              }
            </li>
          ))}
        </ul>
      }
    </main>
  );
}

export default Scheme;
