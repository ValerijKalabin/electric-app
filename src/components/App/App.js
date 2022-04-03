import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getElementPosition, getItemPos, getPosList, getExpandedPosList, getNeighborList, step } from '../../utils/position';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListOfElements from '../ListOfElements/ListOfElements';
import ListOfHints from '../ListOfHints/ListOfHints';


function App() {
  const [schemeElementList, setSchemeElementList] = useState([]);
  const [selectedElement, setSelectedElement] = useState({});
  const [pageHeight, setPageHeight] = useState(0);
  const [isAllNavigationVisible, setNavigationVisibility] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


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
      position: getElementPosition(pos, button.name),
      pagePosition: pos
    };
    elements.forEach((element) => element.listName = 'nolist');
    setSchemeElementList([...elements, newElement]);
    setSelectedElement(newElement);
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
    setSchemeElementList([...newElementList, activeElement]);
    setSelectedElement(activeElement);
    getNeighborList(schemeElementList);
  }


  function selectingElement(button, elements) {
    elements.forEach((element) => element.id === button.id ? element.listName = 'actions' : element.listName = 'nolist');
    const activeElement = elements.find((element) => element.listName === 'actions');
    setSchemeElementList(elements);
    setSelectedElement(activeElement);
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
    setSchemeElementList(newElementList);
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
    if (button.type === 'element') {
      const newElementList = [...schemeElementList];
      if (button.listName === 'nolist') {
        selectingElement(button, newElementList);
      }
      if (button.listName === 'elements') {
        createElement(button, newElementList);
        navigate('/scheme');
      }
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
