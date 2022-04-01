import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { startElement } from '../../utils/element';
import { getElementPosition, getItemPos, getPosList, step } from '../../utils/position';
import { getListType } from '../../utils/buttonList';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListOfButtons from '../ListOfButtons/ListOfButtons';
import ElementSetting from '../ElementSetting/ElementSetting';


function App() {
  const [schemeElementList, setSchemeElementList] = useState([startElement]);
  const [selectedElement, setSelectedElement] = useState(startElement);
  const [newElementPosition, setNewElementPosition] = useState(0);
  const [someElement, setSomeElement] = useState(false);
  const [selectedButton, setSelectedButton] = useState({});
  const [buttonListType, setButtonListType] = useState('');
  const [pageHeight, setPageHeight] = useState(0);
  const navigate = useNavigate();

  function handleClickButton(button) {
    if (button.name === 'add' || button.name === 'help') {
      setSelectedButton(button);
      setButtonListType(getListType(button));
      navigate("/buttons");
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
      if (newElementList.length === 0) {
        newElementList.push(startElement);
        setSelectedElement(startElement);
        setSomeElement(false);
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
      if (button.listName === 'elements' || button.listName === 'buttons') {
        const posList = getPosList(button, schemeElementList);
        let pos = getItemPos(selectedElement);
        while (posList.includes(pos)) {
          pos = pos + step;
        }
        setNewElementPosition(pos);
        setSelectedButton(button);
        navigate("/element");
      }
    }
  }

  function handleSubmitForm(newElement) {
    const newElementList = schemeElementList.filter((element) => element.type === 'element');
    newElementList.forEach((element) => element.listName = 'nolist');
    setSchemeElementList([...newElementList, newElement]);
    setSelectedElement(newElement);
    setSomeElement(true);
    navigate("/scheme");
  }

  useEffect(() => {
    setPageHeight(document.documentElement.scrollHeight);
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme
          pageHeight={pageHeight}
          selectedElement={selectedElement}
          someElement={someElement}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/list' element={<List />} />
        <Route path='/element' element={<ElementSetting
          button={selectedButton}
          position={newElementPosition}
          onSubmitForm={handleSubmitForm}
        />} />
        <Route path='/buttons' element={<ListOfButtons
          button={selectedButton}
          listType={buttonListType}
          selectedElement={selectedElement}
          onClickButton={handleClickButton}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
