import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Manual />} />
        <Route path='/sheme' element={<Scheme />} />
        <Route path='/list' element={<List/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
