import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getPosList, getExpandedPosList, setNeighbors, step } from '../../utils/position';
import { notVirtualElement, getCableElement, getSchemeElement } from '../../utils/element';
import { defaultStatus, getConnectionStatus, getCable, getFilteredList } from '../../utils/cable';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import CableForm from '../CableForm/CableForm';
import ListOfElements from '../ListOfElements/ListOfElements';
import ListOfHints from '../ListOfHints/ListOfHints';


function App() {
  const [schemeElementList, setSchemeElementList] = useState([]);
  const [cableElementList, setCableElementList] = useState([]);
  const [centralElement, setCentralElement] = useState({});
  const [connectionStatus, setConnectionStatus] = useState({});
  const [virtualElement, setVirtualElement] = useState(notVirtualElement);
  const [pageHeight, setPageHeight] = useState(0);
  const [isAllNavigationVisible, setNavigationVisibility] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  function saveSchemeElementList(elements) {
    setNeighbors(elements);
    console.log(elements); // delete !!!
    setSchemeElementList(elements);
  }


  function createElement(button, elements) {
    const posList = getExpandedPosList(button, elements);
    let pos = centralElement.pos || 0;
    while (posList.includes(pos)) {
      pos = pos + step;
    }
    const newElement = getSchemeElement(button, pos, pageHeight);
    elements.forEach((element) => element.listName = 'nolist');
    setCentralElement(newElement);
    saveSchemeElementList([...elements, newElement]);
    navigate('/scheme');
  }


  function selectingElement(button, elements) {
    if (centralElement.listName !== 'cable') {
      elements.forEach((element) => element.id === button.id ? element.listName = 'motion' : element.listName = 'nolist');
      const activeElement = elements.find((element) => element.listName === 'motion');
      setCentralElement(activeElement);
      saveSchemeElementList(elements);
    }
    if (centralElement.listName === 'cable') {
      elements.forEach((element) => element.id === button.id ? element.listName = 'motion' : element.listName = 'nolist');
      const cableElement = elements.find((element) => element.listName === 'motion');
      setCableElementList([centralElement, cableElement]);
      setConnectionStatus(getConnectionStatus([centralElement, cableElement], schemeElementList));
      setCentralElement(cableElement);
      saveSchemeElementList(elements);
      navigate('/cable');
    }
  }


  function relocationElement(button) {
    const movableElement = schemeElementList.find((element) => element.listName === 'motion');
    const filteredElementList = getFilteredList(movableElement, schemeElementList);
    const posList = getPosList(movableElement, schemeElementList);
    if (button.name === 'left') {
      movableElement.pos = movableElement.pos - step;
      while (posList.includes(movableElement.pos)) {
        movableElement.pos = movableElement.pos - step;
      }
    }
    if (button.name === 'right') {
      movableElement.pos = movableElement.pos + step;
      while (posList.includes(movableElement.pos)) {
        movableElement.pos = movableElement.pos + step;
      }
    }
    movableElement.position = { left: `${movableElement.pos}px`, top: `${movableElement.posV}px` };
    movableElement.pagePosition = { right: `${movableElement.pos}px` };
    movableElement.cableList = [];
    setCentralElement(movableElement);
    saveSchemeElementList([...filteredElementList, movableElement]);
  }


  function deleteElement() {
    const deletedElement = schemeElementList.find((element) => element.listName === 'motion');
    const filteredElementList = getFilteredList(deletedElement, schemeElementList);
    if (filteredElementList.length !== 0) {
      setCentralElement(deletedElement);
    } else {
      setCentralElement({});
    }
    saveSchemeElementList(filteredElementList);
  }


  function startCable(button) {
    if (button.name === 'cable') {
      const cableElement = schemeElementList.find((element) => element.listName === 'motion');
      const newElementList = schemeElementList.filter((element) => element.listName !== 'motion');
      cableElement.listName = 'cable';
      setCentralElement(cableElement);
      saveSchemeElementList([...newElementList, cableElement]);
      navigate('/scheme');
    }
    if (button.name === 'cancel') {
      const cableElement = schemeElementList.find((element) => element.id === button.id);
      const newElementList = schemeElementList.filter((element) => element.id !== button.id);
      cableElement.listName = 'motion';
      setCentralElement(cableElement);
      saveSchemeElementList([...newElementList, cableElement]);
      navigate('/scheme');
    }
  }


  function createCable(number) {
    const cable = getCable(cableElementList, pageHeight);
    const newElement = getCableElement(number, cable, cableElementList);
    cableElementList.forEach((element) => element.cableList.push(newElement));
    saveSchemeElementList([...schemeElementList, newElement]);
    navigate('/scheme');
  }


  function handleClickButton(button) {
    if (button.name === 'help' || button.name === 'add') {
      navigate('/elements');
    }
    if (button.name === 'left' || button.name === 'right') {
      relocationElement(button);
    }
    if (button.name === 'delete') {
      deleteElement();
    }
    if (button.name === 'clean') {
      setCentralElement({});
      setVirtualElement(notVirtualElement);
      saveSchemeElementList([]);
      navigate('/scheme');
    }
    if (button.name === 'cable' || button.name === 'cancel') {
      startCable(button);
    }
    if (button.name === 'continue') {
      setConnectionStatus(defaultStatus);
    }
    if (button.type === 'element') {
      setVirtualElement(notVirtualElement);
      const newElementList = [...schemeElementList];
      if (button.listName === 'nolist') {
        selectingElement(button, newElementList);
      }
      if (button.listName === 'elements') {
        createElement(button, newElementList);
      }
    }
  }


  function handleSchemeStart(event) {
    const newVirtualElement = {...virtualElement};
    newVirtualElement.isButtonPressed = true;
    newVirtualElement.startPosition = event.clientX || event.changedTouches[0].clientX;
    newVirtualElement.divider = event.type === 'touchstart' ? 15 : 30;
    setVirtualElement(newVirtualElement);
  }


  function handleSchemeStop() {
    const newVirtualElement = {...virtualElement};
    newVirtualElement.isButtonPressed = false;
    newVirtualElement.isMovingScheme = false;
    newVirtualElement.startPosition = 0;
    newVirtualElement.cursorOffset = 0;
    setVirtualElement(newVirtualElement);
  }


  function handleSchemeMove(event) {
    const newVirtualElement = {...virtualElement};
    const clientX = event.clientX || event.changedTouches[0].clientX;
    if (newVirtualElement.isButtonPressed) {
      newVirtualElement.cursorOffset = clientX - newVirtualElement.startPosition;
      setVirtualElement(newVirtualElement);
    }
    if (Math.abs(newVirtualElement.cursorOffset) > 15) {
      const newElementList = [...schemeElementList];
      newElementList.forEach((element) => element.listName = 'nolist');
      newVirtualElement.position = newVirtualElement.position ? newVirtualElement.position : centralElement.pos;
      newVirtualElement.isMovingScheme = true;
      newVirtualElement.isButtonPressed = false
      newVirtualElement.cursorOffset = 0;
      setVirtualElement(newVirtualElement);
    }
    if (newVirtualElement.isMovingScheme) {
      newVirtualElement.position = newVirtualElement.position + (newVirtualElement.startPosition - clientX) / newVirtualElement.divider;
      newVirtualElement.pagePosition = { right: `${newVirtualElement.position}px` };
      setVirtualElement(newVirtualElement);
    }
  }


  useEffect(() => {
    setPageHeight(document.documentElement.scrollHeight);
  }, []);

  useEffect(() => {
    if (location.pathname === '/scheme' || location.pathname === '/hints' || location.pathname === '/elements') {
      setNavigationVisibility(true);
    } else {
      setNavigationVisibility(false);
    }
  }, [location]);


  return (
    <div className="app">
      <Header
        elementList={schemeElementList}
        isAllNavigationVisible={isAllNavigationVisible}
      />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme
          pageHeight={pageHeight}
          centralElement={centralElement}
          virtualElement={virtualElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
          onSchemeStart={handleSchemeStart}
          onSchemeStop={handleSchemeStop}
          onSchemeMove={handleSchemeMove}
        />} />
        <Route path='/list' element={<List />} />
        <Route path='/elements' element={<ListOfElements
          centralElement={centralElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/hints' element={<ListOfHints
          centralElement={centralElement}
          onClickButton={handleClickButton}
        />} />
        <Route path='/cable' element={<CableForm
          connection={connectionStatus}
          centralElement={centralElement}
          onClickButton={handleClickButton}
          onSubmitForm={createCable}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
