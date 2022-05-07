import { useEffect, useState } from 'react';
import { outerHeight } from '../../utils/position';
import SchemeListItem from '../SchemeListItem/SchemeListItem';
import Search from '../Search/Search';
import './ListOfSchemes.css';


function ListOfSchemes({
  pageHeight,
  drawings,
  currentDrawing,
  onClickDrawing,
  onClickSignout
}) {
  const [searchValue, setSearchValue] = useState('');
  const [indexedDrawings, setIndexedDrawings] = useState(drawings);

  function handleChangeSearch(value) {
    setSearchValue(value);
  }

  function handleClickItem({ action, drawing }) {
    setSearchValue('');
    onClickDrawing({ action, drawing })
  }

  function handleClickAdd() {
    setSearchValue('');
    onClickDrawing({
      action: 'add',
      drawing: {
        _id: '',
        name: 'Новый объект'
      }
    });
  }

  useEffect(() => {
    const newDrawings = [...drawings].reverse();
    const lowerValue = searchValue.toLowerCase();
    const filteredDrawings = newDrawings.filter((drawing) => {
      const lowerName = drawing.name ? drawing.name.toLowerCase() : '';
      return lowerName.includes(lowerValue) || drawing._id === currentDrawing._id;
    });
    let index = 0;
    filteredDrawings.forEach((drawing) => {
      if(drawing._id === currentDrawing._id) {
        drawing.status = 'current';
        drawing.posTop = {top: '-90px'};
      } else {
        drawing.status = 'notcurrent';
        drawing.posTop = {top: `${10 + index * 50}px`};
        index = index + 1;
      }
    });
    setIndexedDrawings(filteredDrawings);
  }, [ drawings, currentDrawing, searchValue ])

  return (
    <main className="schemes" style={{ minHeight: `${pageHeight - outerHeight}px` }}>
      <div className="schemes__container">
        <h1 className="schemes__title">
          Мои чертежи
        </h1>
        {!!currentDrawing.name &&
          <Search value={searchValue} onChangeSearch={handleChangeSearch} />
        }
        {!!currentDrawing.name &&
          <ul
            className="schemes__list"
            style={{height: `${(indexedDrawings.length - 1) * 50}px`}}
          >
            {indexedDrawings.map((drawing) => (
              <li
                className="schemes__item"
                key={drawing._id}
                style={drawing.posTop}
              >
                <SchemeListItem
                  drawing={drawing}
                  onClickItem={handleClickItem}
                />
              </li>
            ))}
          </ul>
        }
      </div>
      <div className="schemes__buttons">
        {!!currentDrawing.name &&
          <button
            className="schemes__add"
            type="button"
            name="add-drawing"
            onClick={handleClickAdd}
          >
            <svg className="bi bi-plus-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#d5d832" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
          </button>
        }
        <button
          className="schemes__signout"
          type="button"
          name="signout"
          onClick={onClickSignout}
        >
          Закрыть
        </button>
      </div>
    </main>
  );
}

export default ListOfSchemes;
