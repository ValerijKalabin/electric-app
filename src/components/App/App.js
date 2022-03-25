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
  const [currentButton, setCurrentButton] = useState({});
  const [schemeElementList, setSchemeElementList] = useState([startElement]);
  const navigate = useNavigate();

  function handleClickButton(button) {
    if (button.name === 'help') {
      setButtonListType(button.listName);
      setButtonListTitle('Назначение кнопок');
      navigate("/buttons");
    }
    if (button.name === 'add') {
      setButtonListType('elements');
      setButtonListTitle(getButtonListTitle(currentButton.name));
      navigate("/buttons");
    }
    if (button.type === 'element') {
      setCurrentButton(button);
      navigate("/element");
    }
  }

  function handleSubmitFormSetting(currentElement) {
    if (schemeElementList[0].name === 'help') {
      schemeElementList.pop();
    }
    schemeElementList.map((schemeElement) => schemeElement.listName = 'nolist');
    setSchemeElementList([...schemeElementList, currentElement]);
    navigate("/scheme");
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme elementList={schemeElementList} onClickButton={handleClickButton} />} />
        <Route path='/list' element={<List />} />
        <Route path='/buttons' element={<ListOfButtons listType={buttonListType} listTitle={buttonListTitle} onClickButton={handleClickButton} />} />
        <Route path='/element' element={<ElementSetting button={currentButton} onSubmitForm={handleSubmitFormSetting} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
