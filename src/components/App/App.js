import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListButtons from '../ListButtons/ListButtons';
import './App.css';


function App() {
  const [buttonsListState, setButtonsListState] = useState('');

  function handleClickHelp(listName) {
    setButtonsListState(listName);
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme onClickHelp={handleClickHelp} />} />
        <Route path='/list' element={<List />} />
        <Route path='/buttons' element={<ListButtons listState={buttonsListState} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
