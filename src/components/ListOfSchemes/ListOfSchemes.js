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
  const [filteredDrawings, setFilteredDrawings] = useState(drawings);

  function handleChangeSearch(value) {
    const filteredDrawings = drawings.filter((drawing) => drawing.name.includes(value));
    setFilteredDrawings(filteredDrawings);
  }

  function handleClickAdd() {
    onClickDrawing({
      action: 'add',
      drawing: {
        _id: '',
        name: 'Новый объект'
      }
    });
  }

  useEffect(() => {
    setFilteredDrawings(drawings);
  }, [ drawings ])

  return (
    <main className="schemes" style={{ minHeight: `${pageHeight - outerHeight}px` }}>
      <div className="schemes__container">
        <h1 className="schemes__title">
          Мои чертежи
        </h1>
        {!!currentDrawing.name &&
          <div className="schemes__item">
            <SchemeListItem drawing={currentDrawing} status="current" onClickDrawing={onClickDrawing} />
          </div>
        }
        {!!currentDrawing.name &&
          <div className="schemes__item">
            <Search onChangeSearch={handleChangeSearch} />
          </div>
        }
        {!!currentDrawing.name &&
          <ul className="schemes__list">
            {filteredDrawings.map((drawing) => (
              <li className="schemes__item" key={drawing._id}>
                <SchemeListItem drawing={drawing} status="notcurrent" onClickDrawing={onClickDrawing} />
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
