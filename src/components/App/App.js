import './App.css';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getPosList, getExpandedPosList, setNeighbors, step } from '../../utils/position';
import { notVirtualElement, getCableElement, getSchemeElement } from '../../utils/element';
import { getCableStatus, getFilteredElementList } from '../../utils/cable';
import { sizingWindowError, savingWindowError, startDrawing, startDrawings } from '../../utils/errors';
import * as api from '../../utils/Api';
import Header from '../Header/Header';
import Manual from '../Manual/Manual';
import Scheme from '../Scheme/Scheme';
import List from '../List/List';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import Preloader from '../Preloader/Preloader';
import Window from '../Window/Window';
import KeyForm from '../KeyForm/KeyForm';
import CableForm from '../CableForm/CableForm';
import ListOfHints from '../ListOfHints/ListOfHints';
import ListOfElements from '../ListOfElements/ListOfElements';
import ListOfSchemes from '../ListOfSchemes/ListOfSchemes';
import ServerError from '../ServerError/ServerError';


function App() {
  const localUser = JSON.parse(localStorage.getItem('kavat-current-user')) || { loggedIn: false };
  const [currentUser, setCurrentUser] = useState(localUser);
  const [currentDrawing, setCurrentDrawing] = useState({ name: ''});
  const [drawings, setDrawings] = useState([]);
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const [isAppVisible, setAppVisibility] = useState(window.innerWidth > 359 && window.innerHeight > 499);
  const [isAllNavigationVisible, setNavigationVisibility] = useState(false);
  const [isPreloaderVisible, setPreloaderVisibility] = useState(false);
  const [windowError, setWindowError] = useState(sizingWindowError);
  const [schemeElementList, setSchemeElementList] = useState([]);
  const [cableElementList, setCableElementList] = useState([]);
  const [centralElement, setCentralElement] = useState({});
  const [cableStatus, setCableStatus] = useState({});
  const [virtualElement, setVirtualElement] = useState(notVirtualElement);
  const navigate = useNavigate();
  const location = useLocation();


  function saveSchemeElementList(elements) {
    setNeighbors(elements);
    setPreloaderVisibility(true);
    api.createAction()
      .then(() => {
        setSchemeElementList(elements);
      })
      .catch(() => {
        setServerErrorMessage('Ошибка сервера, повторите попытку');
      })
      .finally(() => {
        setPreloaderVisibility(false);
      });
  }


  function createElement(button, elements) {
    const posList = getExpandedPosList(button, elements);
    let pos = centralElement.pos || 0;
    while (posList.includes(pos)) {
      pos = pos - step;
    }
    const newElement = getSchemeElement(button, pos);
    elements.forEach((element) => element.listName = 'nolist');
    setCentralElement(newElement);
    saveSchemeElementList([...elements, newElement]);
    navigate('/scheme');
  }


  function selectingElement(button, elements) {
    if (centralElement.listName !== 'cable') {
      elements.forEach((element) => element.id === button.id ? element.listName = 'motion' : element.listName = 'nolist');
      const activeElement = elements.find((element) => element.listName === 'motion');
      setCentralElement(activeElement);
      saveSchemeElementList(elements);
    }
    if (centralElement.listName === 'cable') {
      elements.forEach((element) => element.id === button.id ? element.listName = 'motion' : element.listName = 'nolist');
      const cableElement = elements.find((element) => element.listName === 'motion');
      setCableElementList([centralElement, cableElement]);
      setCableStatus(getCableStatus([centralElement, cableElement], schemeElementList));
      setCentralElement(cableElement);
      saveSchemeElementList(elements);
      navigate('/cable');
    }
  }


  function relocationElement(button) {
    const movableElement = schemeElementList.find((element) => element.listName === 'motion');
    const filteredElementList = getFilteredElementList(movableElement, schemeElementList);
    const posList = getPosList(movableElement, schemeElementList);
    if (button.name === 'left') {
      movableElement.pos = movableElement.pos - step;
      while (posList.includes(movableElement.pos)) {
        movableElement.pos = movableElement.pos - step;
      }
    }
    if (button.name === 'right') {
      movableElement.pos = movableElement.pos + step;
      while (posList.includes(movableElement.pos)) {
        movableElement.pos = movableElement.pos + step;
      }
    }
    movableElement.cableList = [];
    setCentralElement(movableElement);
    saveSchemeElementList([...filteredElementList, movableElement]);
  }


  function deleteElement() {
    const deletedElement = schemeElementList.find((element) => element.listName === 'motion');
    const filteredElementList = getFilteredElementList(deletedElement, schemeElementList);
    if (filteredElementList.length !== 0) {
      setCentralElement(deletedElement);
    } else {
      setCentralElement({});
    }
    saveSchemeElementList(filteredElementList);
  }


  function startCable(button) {
    if (button.name === 'cable') {
      const cableElement = schemeElementList.find((element) => element.listName === 'motion');
      const newElementList = schemeElementList.filter((element) => element.listName !== 'motion');
      cableElement.listName = 'cable';
      setCentralElement(cableElement);
      saveSchemeElementList([...newElementList, cableElement]);
      navigate('/scheme');
    }
    if (button.name === 'cancel') {
      const cableElement = schemeElementList.find((element) => element.id === button.id);
      const newElementList = schemeElementList.filter((element) => element.id !== button.id);
      cableElement.listName = 'motion';
      setCentralElement(cableElement);
      saveSchemeElementList([...newElementList, cableElement]);
      navigate('/scheme');
    }
    if (button.name === 'continue') {
      const newStatus = {...cableStatus};
      newStatus.isCorrect = true;
      setCableStatus(newStatus);
    }
  }


  function createCable(length) {
    const newElement = getCableElement(length, cableElementList, cableStatus);
    cableElementList.forEach((element) => element.cableList.push(newElement));
    saveSchemeElementList([...schemeElementList, newElement]);
    navigate('/scheme');
  }


  function handleClickButton(button) {
    if (button.name === 'help' || button.name === 'add') {
      navigate('/elements');
    }
    if (button.name === 'left' || button.name === 'right') {
      relocationElement(button);
    }
    if (button.name === 'delete') {
      deleteElement();
    }
    if (button.name === 'clean') {
      setCentralElement({});
      setVirtualElement(notVirtualElement);
      saveSchemeElementList([]);
      navigate('/scheme');
    }
    if (button.name === 'cable' || button.name === 'cancel' || button.name === 'continue') {
      startCable(button);
    }
    if (button.type === 'element') {
      setVirtualElement(notVirtualElement);
      const newElementList = [...schemeElementList];
      if (button.listName === 'nolist') {
        selectingElement(button, newElementList);
      }
      if (button.listName === 'elements') {
        createElement(button, newElementList);
      }
    }
  }


  function selectingDrawing(drawingId) {
    const newCurrentDrawing = drawings.find((drawing) => drawing._id === drawingId);
    const newCurrentDrawings = drawings.filter((drawing) => drawing._id !== drawingId);
    setDrawings([...newCurrentDrawings, currentDrawing]);
    setCurrentDrawing(newCurrentDrawing);
  }


  function handleClickDrawing({ action, drawingId}) {
    if(action === 'choose') {
      selectingDrawing(drawingId);
    }
  }


  function handleSubmitSignin(user) {
    user.loggedIn = true;
    setCurrentUser(user);
    localStorage.setItem('kavat-current-user', JSON.stringify(user));
    navigate('/');
  }


  function handleClickSignout() {
    setPreloaderVisibility(true);
    api.signout()
      .then(() => {
        setCurrentUser({ loggedIn: false });
        localStorage.removeItem('kavat-current-user');
      })
      .catch(() => {
        setServerErrorMessage('Ошибка сервера, повторите попытку');
      })
      .finally(() => {
        setPreloaderVisibility(false);
      });
  }


  function handleCloseServerError() {
    setServerErrorMessage('');
  }


  function handleSchemeStart(event) {
    const newVirtualElement = {...virtualElement};
    newVirtualElement.isButtonPressed = true;
    newVirtualElement.startPosition = event.clientX || event.changedTouches[0].clientX;
    newVirtualElement.divider = event.type === 'touchstart' ? 20 : 30;
    setVirtualElement(newVirtualElement);
  }


  function handleSchemeStop() {
    const newVirtualElement = {...virtualElement};
    newVirtualElement.isButtonPressed = false;
    newVirtualElement.isMovingScheme = false;
    newVirtualElement.startPosition = 0;
    newVirtualElement.cursorOffset = 0;
    setVirtualElement(newVirtualElement);
  }


  function handleSchemeMove(event) {
    const newVirtualElement = {...virtualElement};
    const clientX = event.clientX || event.changedTouches[0].clientX;
    if (newVirtualElement.isButtonPressed) {
      newVirtualElement.cursorOffset = clientX - newVirtualElement.startPosition;
      setVirtualElement(newVirtualElement);
    }
    if (Math.abs(newVirtualElement.cursorOffset) > 15) {
      const newElementList = [...schemeElementList];
      newElementList.forEach((element) => element.listName === 'cable' ? element.listName = 'cable' : element.listName = 'nolist');
      newVirtualElement.pos = newVirtualElement.pos ? newVirtualElement.pos : centralElement.pos;
      newVirtualElement.isMovingScheme = true;
      newVirtualElement.isButtonPressed = false
      newVirtualElement.cursorOffset = 0;
      setVirtualElement(newVirtualElement);
    }
    if (newVirtualElement.isMovingScheme) {
      newVirtualElement.pos = newVirtualElement.pos + (newVirtualElement.startPosition - clientX) / newVirtualElement.divider;
      setVirtualElement(newVirtualElement);
    }
  }


  useEffect(() => {
    const handleResize = () => {
      setAppVisibility(window.innerWidth > 359 && window.innerHeight > 499);
      setPageWidth(window.innerWidth);
      setPageHeight(window.innerHeight);
      if(location.pathname === '/cable') {
        setWindowError(savingWindowError);
      } else {
        setWindowError(sizingWindowError);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [ location ]);


  useEffect(() => {
    if (location.pathname === '/scheme' || location.pathname === '/hints' || location.pathname === '/elements') {
      setNavigationVisibility(true);
    } else {
      setNavigationVisibility(false);
    }
  }, [ location ]);


  useEffect(() => {
    if(currentUser.loggedIn) {
      setPreloaderVisibility(true);
      Promise.all([
        api.getDrawings(),
        api.createDrawing({
          name: 'Новая схема',
          owner: currentUser._id,
          elements: []
        })
      ])
        .then(([ drawings, currentDrawing ]) => {
          setDrawings(drawings);
          setCurrentDrawing(currentDrawing);
        })
        .catch(() => {
          setCurrentUser({ loggedIn: false });
          localStorage.removeItem('kavat-current-user');
        })
        .finally(() => {
          setPreloaderVisibility(false);
        });
    } else {
      setDrawings(startDrawings);
      setCurrentDrawing(startDrawing);
    }
  }, [ currentUser ]);


  return (
    <div className="app" style={{ minHeight: `${pageHeight}px` }}>
      <Header
        elementList={schemeElementList}
        isAppVisible={isAppVisible}
        isAllNavigationVisible={isAllNavigationVisible}
      />
      <Routes>
        <Route path='/' element={
          !currentUser.loggedIn
          ? <Manual />
          : <ListOfSchemes
              pageWidth={pageWidth}
              pageHeight={pageHeight}
              drawings={drawings}
              currentDrawing={currentDrawing}
              onClickDrawing={handleClickDrawing}
              onClickSignout={handleClickSignout}
            />
        } />
        <Route path='/scheme' element={
          isAppVisible
          ? <Scheme
              pageHeight={pageHeight}
              centralElement={centralElement}
              virtualElement={virtualElement}
              elementList={schemeElementList}
              onClickButton={handleClickButton}
              onSchemeStart={handleSchemeStart}
              onSchemeStop={handleSchemeStop}
              onSchemeMove={handleSchemeMove}
            />
          : <Error windowError={windowError} />
        } />
        <Route path='/list' element={
          isAppVisible
          ? <List elementList={schemeElementList} />
          : <Error windowError={windowError} />
        } />
        <Route path='/elements' element={
          isAppVisible
          ? <ListOfElements
              centralElement={centralElement}
              elementList={schemeElementList}
              onClickButton={handleClickButton}
            />
          : <Error windowError={windowError} />
        } />
        <Route path='/hints' element={
          isAppVisible
          ? <ListOfHints
              centralElement={centralElement}
              onClickButton={handleClickButton}
            />
          : <Error windowError={windowError} />
        } />
        <Route path='/cable' element={
          <CableForm
            cable={cableStatus}
            centralElement={centralElement}
            onClickButton={handleClickButton}
            onSubmitForm={createCable}
          />
        } />
        <Route path='/key' element={
          !currentUser.loggedIn
          ? <KeyForm onSubmitSignin={handleSubmitSignin} />
          : <Navigate replace to="/" />
        } />
        <Route path='/window' element={
          <Window
            pageWidth={pageWidth}
            pageHeight={pageHeight}
          />
        } />
      </Routes>
      <Footer />
      <Preloader isPreloaderVisible={isPreloaderVisible} />
      <ServerError
        serverErrorMessage={serverErrorMessage}
        onClickClose={handleCloseServerError}
      />
    </div>
  );
}

export default App;
