import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ButtonsAssignment from '../ButtonsAssignment/ButtonsAssignment';
import { useState } from 'react';


function App() {
  const [typeOfButtons, setTypeOfButtons] = useState('');

  function handleClickHelp(type) {
    setTypeOfButtons(type);
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/scheme' element={<Scheme onClickHelp={handleClickHelp} />} />
        <Route path='/list' element={<List />} />
        <Route path='/buttons-assignment' element={<ButtonsAssignment type={typeOfButtons} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
