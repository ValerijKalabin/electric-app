import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListButtons from '../ListButtons/ListButtons';
import ElementSetting from '../ElementSetting/ElementSetting';


function App() {
  const [buttonListType, setButtonListType] = useState('');
  const [elementName, setElementName] = useState('');

  function handleClickButton({ listName, buttonName, buttonType }) {
    if (buttonName === 'help') {
      setButtonListType(listName);
    }
    if (buttonType === 'element') {
      setElementName(buttonName);
    }
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme elementName={elementName} onClickButton={handleClickButton} />} />
        <Route path='/list' element={<List />} />
        <Route path='/buttons' element={<ListButtons listType={buttonListType} onClickButton={handleClickButton} />} />
        <Route path='/element' element={<ElementSetting elementName={elementName} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
