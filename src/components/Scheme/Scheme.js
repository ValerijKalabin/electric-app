import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import ListOfActions from '../ListOfActions/ListOfActions';
import ListOfElements from '../ListOfElements/ListOfElements';
import ListOfNavigation from '../ListOfNavigation/ListOfNavigation';
import { useEffect, useState } from 'react';
import { startElement } from '../../utils/element';
import { lineBottom, navigationBlockHeight, headerFooterBlocksHeight } from '../../utils/position';
import './Scheme.css';

function Scheme({ elementList, onClickButton }) {
  const [someElement, setSomeElement] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});
  const [elementListStyle, setElementListStyle] = useState({});
  const [schemeMarkup, setSchemeMarkup] = useState({});

  useEffect(() => {
    const activeElement = elementList.find((element) => element.listName === 'actions');
    const deletedElement = elementList.find((element) => element.listName === 'deleted');
    const selectedElement = activeElement || deletedElement || startElement;

    const someElement = elementList.some((element) => element.type === 'element');
    const outsideHeight = someElement ? headerFooterBlocksHeight + navigationBlockHeight : headerFooterBlocksHeight;
    const lineTop = someElement ? lineBottom + navigationBlockHeight : lineBottom;
    const lineCenter = (document.documentElement.scrollHeight - outsideHeight) / 2;

    setSomeElement(someElement);
    setSelectedElement(selectedElement);
    setElementListStyle({
      right: `${selectedElement.pagePosition}px`,
      height: `calc(100vh - ${outsideHeight}px)`
    });
    setSchemeMarkup({ backgroundImage: `
      linear-gradient(to bottom, transparent ${lineTop}px, #222 ${lineTop}px, #222 ${lineTop + 1}px, transparent ${lineTop + 1}px),
      linear-gradient(to top, transparent ${lineCenter}px, #222 ${lineCenter}px, #222 ${lineCenter + 1}px, transparent ${lineCenter + 1}px),
      linear-gradient(to top, transparent ${lineBottom}px, #222 ${lineBottom}px, #222 ${lineBottom + 1}px, transparent ${lineBottom + 1}px)
    `});
  }, [ elementList ]);

  return (
    <main className="scheme" style={schemeMarkup}>
      { someElement &&
        <div className="scheme__navigation">
          <ListOfNavigation elementID={selectedElement.id} onClickButton={onClickButton} />
        </div>
      }
      <ul className="scheme__list" style={elementListStyle}>
        { elementList.map((element) => (
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
          </li>
        )) }
        { someElement &&
          <li className="scheme__mark">
            <svg className="scheme__image" width="30" height="15" fill="transparent" stroke="#d5d832" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" x2="30" y1="14" y2="14" />
              <line x1="15" x2="15" y1="0" y2="15" />
            </svg>
          </li>
        }
      </ul>
    </main>
  );
}

export default Scheme;
