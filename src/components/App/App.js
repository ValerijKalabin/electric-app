import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getElementPosition, getItemPos, getPosList, getExpandedPosList, getNeighborList, getCable, step } from '../../utils/position';
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
  const [selectedElement, setSelectedElement] = useState({});
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
    let pos = getItemPos(selectedElement);
    while (posList.includes(pos)) {
      pos = pos + step;
    }
    const newElement = {
      id: `e-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
      name: button.name,
      type: button.type,
      listName: 'actions',
      listType: 'motion', //delete !!!
      position: getElementPosition(pos, button.name),
      pagePosition: pos,
      blockStatus: 'noblock',
      cableList: []
    };
    elements.forEach((element) => element.listName = 'nolist');
    saveSchemeElementList([...elements, newElement]);
    setSelectedElement(newElement);
    navigate('/scheme');
  }


  function relocationElement(button) {
    const activeElement = schemeElementList.find((element) => element.listName === 'actions');
    const newElementList = schemeElementList.filter((element) => element.listName !== 'actions');
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
    saveSchemeElementList([...newElementList, activeElement]);
    setSelectedElement(activeElement);
  }


  function selectingElement(button, elements) {
    if (selectedElement.listType !== 'cable') {
      elements.forEach((element) => {
        element.id === button.id ? element.listName = 'actions' : element.listName = 'nolist';
        element.listType = 'motion';
      });
      const activeElement = elements.find((element) => element.listName === 'actions');
      setSelectedElement(activeElement);
      saveSchemeElementList(elements);
    }
    if (selectedElement.listType === 'cable') {
      const startCableElement = elements.find((element) => element.listName === 'actions');
      const stopCableElement = elements.find((element) => element.id === button.id);
      const newElementList = schemeElementList.filter((element) => element.listName !== 'actions' && element.id !== button.id);
      startCableElement.listType = 'cable-start';
      stopCableElement.listType = 'cable-end';
      stopCableElement.listName = 'actions';
      setSelectedElement(stopCableElement);
      saveSchemeElementList([...newElementList, startCableElement, stopCableElement]);
    }
  }


  function deleteElement() {
    const newElementList = schemeElementList.filter((element) => element.listName !== 'actions');
    if (newElementList.length !== 0) {
      const deletedElement = schemeElementList.find((element) => element.listName === 'actions');
      deletedElement.id = 'not-element';
      deletedElement.name = 'deleted';
      setSelectedElement(deletedElement);
    }
    if (newElementList.length === 0) {
      setSelectedElement({});
    }
    saveSchemeElementList(newElementList);
  }


  function startCable(button) {
    const activeElement = schemeElementList.find((element) => element.id === button.id);
    if (button.name === 'cable') {
      const newElementList = schemeElementList.filter((element) => element.listName !== 'actions');
      activeElement.listType = 'cable';
      saveSchemeElementList([...newElementList, activeElement]);
      setSelectedElement(activeElement);
      navigate('/scheme');
    }
    if (button.name === 'cancel') {
      const newElementList = schemeElementList.filter((element) => element.listName !== 'actions');
      const activeElements = schemeElementList.filter((element) => element.listName === 'actions');
      activeElements.forEach((element) => {
        element.listType = 'motion';
        element.listName = 'nolist';
      });
      activeElement.listName = 'actions';
      saveSchemeElementList([...newElementList, ...activeElements]);
      setSelectedElement(activeElement);
      navigate('/scheme');
    }
    if (button.name === 'confirm') {
      setSelectedElement(activeElement);
      navigate('/cable');
    }
  }


  function handleClickButton(button) {
    if (button.name === 'help' || button.name === 'add') {
      navigate("/elements");
    }
    if (button.name === 'left' || button.name === 'right') {
      relocationElement(button);
    }
    if (button.name === 'delete') {
      deleteElement();
    }
    if (button.name === 'cable' || button.name === 'cancel' || button.name === 'confirm') {
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


  function handleSubmitForm(number) {
    const newElementList = schemeElementList.filter((element) => element.listType !== 'cable-start' && element.listType !== 'cable-end');
    const startElement = schemeElementList.find((element) => element.listType === 'cable-start');
    const stopElement = schemeElementList.find((element) => element.listType === 'cable-end');
    const cable = getCable(startElement, stopElement, pageHeight);
    const newElement = {
      id: `c-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
      name: 'cable',
      type: 'element',
      listName: 'nolist',
      listType: 'static',  //delete !!!
      length: number,
      position: cable.position,
      width: cable.width,
      height: cable.height,
      line: cable.line
    };
    startElement.cableList.push(newElement);
    stopElement.cableList.push(newElement);
    newElementList.push(startElement);
    newElementList.push(stopElement);
    newElementList.forEach((element) => {
      element.listType = 'motion';
      element.listName = 'nolist';
    });
    saveSchemeElementList([...newElementList, newElement]);
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
          selectedElement={selectedElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/list' element={<List />} />
        <Route path='/elements' element={<ListOfElements
          selectedElement={selectedElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/hints' element={<ListOfHints
          selectedElement={selectedElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/cable' element={<CableForm
          selectedElement={selectedElement}
          onClickButton={handleClickButton}
          onSubmitForm={handleSubmitForm}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
