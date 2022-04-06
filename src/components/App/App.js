import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getElementPosition, getItemPos, getPosList, getExpandedPosList, getNeighborList, getCable, step } from '../../utils/position';
import { getCableElement, getSchemeElement } from '../../utils/element';
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
  const [pageHeight, setPageHeight] = useState(0);
  const [isAllNavigationVisible, setNavigationVisibility] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  function saveSchemeElementList(elements) {
    const neighbors = getNeighborList(elements);
    setSchemeElementList(neighbors);
    console.log(neighbors); // delete !!!!!!
  }


  function createElement(button, elements) {
    const posList = getExpandedPosList(button, elements);
    let pos = getItemPos(centralElement);
    while (posList.includes(pos)) {
      pos = pos + step;
    }
    const newElement = getSchemeElement(button, pos);
    elements.forEach((element) => element.listName = 'nolist');
    setCentralElement(newElement);
    saveSchemeElementList([...elements, newElement]);
    navigate('/scheme');
  }


  function relocationElement(button) {
    const newElementList = [...schemeElementList];
    const activeElement = newElementList.find((element) => element.listName === 'motion');
    newElementList.forEach((element) => {
      if (activeElement.cableList.some((cable) => cable.id === element.id)) {
        element.listName = 'motion';
      }
    });
    const filterElementList = schemeElementList.filter((element) => element.listName !== 'motion');
    const posList = getPosList(activeElement, newElementList);
    let pos = getItemPos(activeElement);
    if (button.name === 'left') {
      pos = pos - step;
      while (posList.includes(pos)) {
        pos = pos - step;
      }
    }
    if (button.name === 'right') {
      pos = pos + step;
      while (posList.includes(pos)) {
        pos = pos + step;
      }
    }
    activeElement.position = getElementPosition(pos, activeElement.name);
    activeElement.pagePosition = pos;
    setCentralElement(activeElement);
    saveSchemeElementList([...filterElementList, activeElement]);
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
      const cableElement = elements.find((element) => element.id === button.id);
      setCableElementList([centralElement, cableElement]);
      setCentralElement(cableElement);
      saveSchemeElementList(elements);
      navigate('/cable');
    }
  }


  function deleteElement() {
    const newElementList = [...schemeElementList];
    const deletedElement = schemeElementList.find((element) => element.listName === 'motion');
    newElementList.forEach((element) => {
      if (deletedElement.cableList.some((cable) => cable.id === element.id)) {
        element.listName = 'motion';
      }
    });
    const filterElementList = newElementList.filter((element) => element.listName !== 'motion');
    setCentralElement(deletedElement);
    saveSchemeElementList(filterElementList);
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
      setSchemeElementList([]);
      navigate('/scheme');
    }
    if (button.name === 'cable' || button.name === 'cancel') {
      startCable(button);
    }
    if (button.type === 'element') {
      const newElementList = [...schemeElementList];
      if (button.listName === 'nolist') {
        selectingElement(button, newElementList);
      }
      if (button.listName === 'elements') {
        createElement(button, newElementList);
      }
    }
  }


  function createCable(number) {
    const cable = getCable(cableElementList, pageHeight);
    const newElement = getCableElement(number, cable);
    const newElementList = [...schemeElementList];
    newElementList.forEach((element) => {
      if (cableElementList.some((cable) => cable.id === element.id)) {
        element.cableList.push(newElement);
      }
    });
    newElementList.push(newElement);
    saveSchemeElementList(newElementList);
    navigate('/scheme');
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
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/list' element={<List />} />
        <Route path='/elements' element={<ListOfElements
          centralElement={centralElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/hints' element={<ListOfHints
          centralElement={centralElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/cable' element={<CableForm
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
