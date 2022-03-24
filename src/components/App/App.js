import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListOfButtons from '../ListOfButtons/ListOfButtons';
import ElementSetting from '../ElementSetting/ElementSetting';


function App() {
  const [buttonListType, setButtonListType] = useState('');
  const [currentButtonName, setCurrentButtonName] = useState('');
  const [currentElementName, setCurrentElementName] = useState('');

  function handleClickButton({ listName, buttonName, buttonType }) {
    if (buttonName === 'help') {
      setButtonListType(listName);
    }
    if (buttonType === 'element') {
      setCurrentButtonName(buttonName);
    }
  }

  function handleSubmitFormSetting(buttonName) {
    setCurrentElementName(buttonName);
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme elementName={currentElementName} onClickButton={handleClickButton} />} />
        <Route path='/list' element={<List />} />
        <Route path='/buttons' element={<ListOfButtons listType={buttonListType} onClickButton={handleClickButton} />} />
        <Route path='/element' element={<ElementSetting buttonName={currentButtonName} onSubmitForm={handleSubmitFormSetting} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
