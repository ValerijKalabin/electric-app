import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import { startElement } from '../../utils/element';
import ListOfActions from '../ListOfActions/ListOfActions';
import ListOfElements from '../ListOfElements/ListOfElements';
import './Scheme.css';

function Scheme({ elementList, onClickButton }) {
  const selectedElement = elementList.find((element) => element.listName === 'actions') || startElement;

  return (
    <main className="scheme">
      <ul className="scheme__list" style={selectedElement.pagePosition}>
        {elementList.map((element) => (
          <li className="scheme__item" key={element.id} style={element.position}>
            { element.listName === 'elements' &&
              <ListOfElements elementID={element.id} onClickButton={onClickButton} />
            }
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
            { element.line.length !==0 &&
              <svg className="scheme__line" width="60" height="60" fill="transparent" stroke="#bbbbbb" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <line x1={element.line[0]} x2={element.line[1]} y1={element.line[2]} y2={element.line[3]} />
              </svg>
            }
          </li>
        ))}
        <li className="scheme__horizontal-red-line-25"></li>
        <li className="scheme__horizontal-red-line-50"></li>
        <li className="scheme__horizontal-red-line-75"></li>
        <li className="scheme__vertical-red-line"></li>
      </ul>
    </main>
  );
}

export default Scheme;
