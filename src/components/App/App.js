import './App.css';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { startElement } from '../../utils/element';
import { getButtonListTitle } from '../../utils/button';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListOfButtons from '../ListOfButtons/ListOfButtons';
import ElementSetting from '../ElementSetting/ElementSetting';


function App() {
  const [buttonListType, setButtonListType] = useState('');
  const [buttonListTitle, setButtonListTitle] = useState('');
  const [currentButton, setCurrentButton] = useState({id: ''});
  const [schemeElementList, setSchemeElementList] = useState([startElement]);
  const navigate = useNavigate();

  function handleClickButton(button) {
    if (button.name === 'add') {
      setButtonListType('elements');
      setButtonListTitle(getButtonListTitle(currentButton.name));
      navigate("/buttons");
    }

    if (button.name === 'delete') {
      const currentElementList = schemeElementList.filter((element) => element.id !== button.id);
      if (currentElementList.length === 0) {
        currentElementList.push(startElement);
      }
      setSchemeElementList(currentElementList);
      navigate("/scheme");
    }

    if (button.name === 'help') {
      setButtonListType(button.listName);
      setButtonListTitle('Назначение кнопок');
      navigate("/buttons");
    }

    if (button.type === 'element') {
      setCurrentButton(button);
      if (button.listName !== 'nolist') {
        navigate("/element");
      }
      if (button.listName === 'nolist') {
        const currentElementList = [...schemeElementList];
        currentElementList.forEach((element) => element.id === button.id ? element.listName = 'actions' : element.listName = 'nolist');
        setSchemeElementList(currentElementList);
      }
    }
  }

  function handleSubmitFormSetting(currentElement) {
    const currentElementList = [...schemeElementList];
    if (currentElementList[0].name === 'help') {
      currentElementList.pop();
    }
    currentElementList.forEach((element) => element.listName = 'nolist');
    setSchemeElementList([...currentElementList, currentElement]);
    setCurrentButton(currentElement);
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
          button={currentButton}
          onSubmitForm={handleSubmitFormSetting}
        />} />
        <Route path='/buttons' element={<ListOfButtons
          buttonID={currentButton.id}
          listType={buttonListType}
          listTitle={buttonListTitle}
          onClickButton={handleClickButton}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
