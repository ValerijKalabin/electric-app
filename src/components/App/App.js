import './App.css';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { startElement } from '../../utils/element';
import { defaultParameters, getExplanation } from '../../utils/buttonList';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ListOfButtons from '../ListOfButtons/ListOfButtons';
import ElementSetting from '../ElementSetting/ElementSetting';


function App() {
  const [buttonListParameters, setButtonListParameters] = useState(defaultParameters);
  const [selectedElement, setSelectedElement] = useState(startElement);
  const [schemeElementList, setSchemeElementList] = useState([startElement]);
  const navigate = useNavigate();

  function handleClickButton(button) {
    if (button.name === 'add') {
      const currentParameters = {...buttonListParameters};
      currentParameters.listType = 'elements';
      currentParameters.listTitle = 'Следующий элемент';
      currentParameters.listExplanation = getExplanation(selectedElement.name);
      setButtonListParameters(currentParameters);
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
      const currentParameters = {...buttonListParameters};
      currentParameters.listType = button.listName;
      currentParameters.listTitle = 'Назначение кнопок';
      currentParameters.listExplanation = '';
      setButtonListParameters(currentParameters);
      navigate("/buttons");
    }

    if (button.type === 'element') {
      setSelectedElement(button);
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
    setSelectedElement(currentElement);
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
          button={selectedElement}
          onSubmitForm={handleSubmitFormSetting}
        />} />
        <Route path='/buttons' element={<ListOfButtons
          buttonID={selectedElement.id}
          parameters={buttonListParameters}
          onClickButton={handleClickButton}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
