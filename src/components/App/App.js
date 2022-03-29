import './App.css';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { startElement } from '../../utils/element';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListOfButtons from '../ListOfButtons/ListOfButtons';
import ElementSetting from '../ElementSetting/ElementSetting';


function App() {
  const [schemeElementList, setSchemeElementList] = useState([startElement]);
  const [selectedButton, setSelectedButton] = useState({});
  const navigate = useNavigate();

  function handleClickButton(button) {
    if (button.name === 'add' || button.name === 'help') {
      setSelectedButton(button);
      navigate("/buttons");
    }

    if (button.name === 'delete') {
      const newElementList = schemeElementList.filter((element) => element.listName !== 'actions');
      if (newElementList.length !== 0) {
        const deletedElement = schemeElementList.find((element) => element.listName === 'actions');
        deletedElement.name = 'deleted';
        deletedElement.type = 'deleted';
        deletedElement.listName = 'deleted';
        newElementList.push(deletedElement);
      }
      if (newElementList.length === 0) {
        newElementList.push(startElement);
      }
      setSchemeElementList(newElementList);
    }

    if (button.type === 'element') {
      if (button.listName === 'nolist') {
        const newElementList = schemeElementList.filter((element) => element.type === 'element');
        newElementList.forEach((element) => element.id === button.id ? element.listName = 'actions' : element.listName = 'nolist');
        setSchemeElementList(newElementList);
        navigate("/scheme");
      }
      if (button.listName === 'elements' || button.listName === 'buttons') {
        setSelectedButton(button);
        navigate("/element");
      }
    }
  }

  function handleSubmitForm(newElement) {
    const newElementList = schemeElementList.filter((element) => element.type === 'element');
    newElementList.forEach((element) => element.listName = 'nolist');
    newElementList.push(newElement);
    setSchemeElementList(newElementList);
    navigate("/scheme");
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
        <Route path='/list' element={<List />} />
        <Route path='/element' element={<ElementSetting
          button={selectedButton}
          elementList={schemeElementList}
          onSubmitForm={handleSubmitForm}
        />} />
        <Route path='/buttons' element={<ListOfButtons
          button={selectedButton}
          elementList={schemeElementList}
          onClickButton={handleClickButton}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
