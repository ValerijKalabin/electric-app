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
  virtualElement,
  elementList,
  onClickButton,
  onSchemeStart,
  onSchemeStop,
  onSchemeMove
}) {
  return (
    <main className="scheme">
      { !elementList.length && <Wheel onClickButton={onClickButton} /> }
      { !!elementList.length &&
        <div className="scheme__container" style={ getSchemeMarkup(pageHeight) }>
          <ul
            className={`scheme__list ${!virtualElement.position ? 'scheme__list_movable' : ''}`}
            style={!!virtualElement.position ? virtualElement.pagePosition : centralElement.pagePosition}
          >
            { elementList.map((element) => (
              <li
                key={element.id}
                style={element.position}
                className={`
                  scheme__item
                  ${element.name === 'cable' ? 'scheme__item_cable' : ''}
                  ${element.blockStatus === 'first' ? 'scheme__item_place_first' : ''}
                  ${element.blockStatus === 'middle' ? 'scheme__item_place_middle' : ''}
                  ${element.blockStatus === 'last' ? 'scheme__item_place_last' : ''}
                `}
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
          <button
            className="scheme__coat"
            type="button"
            name="scheme"
            onMouseDown={onSchemeStart}
            onMouseUp={onSchemeStop}
            onMouseMove={onSchemeMove}
            onTouchStart={onSchemeStart}
            onTouchEnd={onSchemeStop}
            onTouchMove={onSchemeMove}
          />
        </div>
      }
    </main>
  );
}

export default Scheme;
