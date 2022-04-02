import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getElementPosition, getItemPos, getPosList, step } from '../../utils/position';
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
  const navigate = useNavigate();

  function handleClickButton(button) {
    if (button.name === 'help' || button.name === 'add') {
      navigate("/elements");
    }

    if (button.name === 'left' || button.name === 'right') {
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
    }

    if (button.name === 'delete') {
      const newElementList = schemeElementList.filter((element) => element.listName !== 'actions');
      if (newElementList.length !== 0) {
        const deletedElement = schemeElementList.find((element) => element.listName === 'actions');
        deletedElement.id = 'not-element';
        deletedElement.name = 'deleted';
        setSelectedElement(deletedElement);
      }
      setSchemeElementList(newElementList);
    }

    if (button.type === 'element') {
      if (button.listName === 'nolist') {
        const newElementList = schemeElementList.filter((element) => element.type === 'element');
        newElementList.forEach((element) => element.id === button.id ? element.listName = 'actions' : element.listName = 'nolist');
        const activeElement = newElementList.find((element) => element.listName === 'actions');
        setSchemeElementList(newElementList);
        setSelectedElement(activeElement);
      }
      if (button.listName === 'elements') {
        const posList = getPosList(button, schemeElementList);
        let pos = getItemPos(selectedElement);
        while (posList.includes(pos)) {
          pos = pos + step;
        }
        const newElement = {
          id: `a-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
          name: button.name,
          type: button.type,
          listName: 'actions',
          position: getElementPosition(pos, button.name),
          pagePosition: pos
        };
        setSchemeElementList([...schemeElementList, newElement]);
        setSelectedElement(newElement);
        navigate("/scheme");
      }
    }
  }

  useEffect(() => {
    setPageHeight(document.documentElement.scrollHeight);
  }, []);

  return (
    <div className="app">
      <Header elementList={schemeElementList} />
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
