import './App.css';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListOfButtons from '../ListOfButtons/ListOfButtons';
import ElementSetting from '../ElementSetting/ElementSetting';


function App() {
  const [buttonListType, setButtonListType] = useState('');
  const [currentButton, setCurrentButton] = useState({});
  const [schemeElementList, setSchemeElementList] = useState([{
    id: `a-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: 'help',
    type: 'action',
    listName: 'elements',
    description: '',
    number: '',
    power: ''
  }]);
  const navigate = useNavigate();

  function handleClickButton(button) {
    if (button.name === 'help') {
      setButtonListType(button.listName);
      navigate("/buttons");
    }
    if (button.type === 'element') {
      setCurrentButton(button);
      navigate("/element");
    }
  }

  function handleSubmitFormSetting(currentElement) {
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
        <Route path='/buttons' element={<ListOfButtons listType={buttonListType} onClickButton={handleClickButton} />} />
        <Route path='/element' element={<ElementSetting button={currentButton} onSubmitForm={handleSubmitFormSetting} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
