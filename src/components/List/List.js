import { useEffect, useState } from 'react';
import './List.css';

function List({ currentDrawing, elementList }) {
  const [materials, setMaterials] = useState([]);

  useEffect (() => {
    const autoSwitch = elementList.reduce((number, element) => element.name === 'auto-switch' ? number + 1 : number, 0);
    const junctionBox = elementList.reduce((number, element) => element.name === 'junction-box' ? number + 1 : number, 0);
    const lamp = elementList.reduce((number, element) => element.name === 'lamp' ? number + 1 : number, 0);
    const toggle = elementList.reduce((number, element) => element.name === 'switch' ? number + 1 : number, 0);
    const socket = elementList.reduce((number, element) => element.name === 'socket' ? number + 1 : number, 0);
    const cable = elementList.reduce((number, element) => element.name === 'cable' ? number + Number(element.length) : number, 0);
    const frameForTwo = elementList.reduce((number, element) => element.elementsInBlock === 2 ? number + 1 : number, 0);
    const frameForThree = elementList.reduce((number, element) => element.elementsInBlock === 3 ? number + 1 : number, 0);
    const frameForFour = elementList.reduce((number, element) => element.elementsInBlock === 4 ? number + 1 : number, 0);
    const frameForFive = elementList.reduce((number, element) => element.elementsInBlock === 5 ? number + 1 : number, 0);
    const frameForSix = elementList.reduce((number, element) => element.elementsInBlock === 6 ? number + 1 : number, 0)
    const frameForOne = toggle + socket - frameForTwo * 2 - frameForThree * 3 - frameForFour * 4 - frameForFive * 5 - frameForSix * 6;

    setMaterials([
      {
        material: 'Автоматические выключатели, шт',
        number: autoSwitch
      },
      {
        material: 'Распаечные коробки, шт',
        number: junctionBox
      },
      {
        material: 'Светильники, шт',
        number: lamp
      },
      {
        material: 'Выключатели, шт',
        number: toggle
      },
      {
        material: 'Розетки, шт',
        number: socket
      },
      {
        material: 'Соединительный кабель, м',
        number: cable
      },
      {
        material: 'Рамки для розеток и выключателей на один пост, шт',
        number: frameForOne
      },
      {
        material: 'Рамки для розеток и выключателей на два поста, шт',
        number: frameForTwo
      },
      {
        material: 'Рамки для розеток и выключателей на три поста, шт',
        number: frameForThree
      },
      {
        material: 'Рамки для розеток и выключателей на четыре поста, шт',
        number: frameForFour
      },
      {
        material: 'Рамки для розеток и выключателей на пять постов, шт',
        number: frameForFive
      },
      {
        material: 'Рамки для розеток и выключателей на шесть постов, шт',
        number: frameForSix
      }
    ]);
  }, [ elementList ]);

  return (
    <main className="materials">
      <h1 className={`materials__title ${!elementList.length ? 'materials__title_nomaterials' : ''}`}>
        { !elementList.length ? 'Здесь будет список материалов' : 'Материалы' }
      </h1>
      {!!currentDrawing.name &&
        <p className={`materials__subtitle ${!elementList.length ? 'materials__subtitle_nomaterials' : ''}`}>
          {currentDrawing.name}
        </p>
      }
      <ul className="materials__list">
        { materials.map((item, index) => (
          <li className="materials__item" key={`m${index}`}>
            { !!item.number &&
              <div className="materials__container">
                <div className="materials__label">
                  <p className="materials__name">{item.material}</p>
                </div>
                <p className="materials__number">{item.number}</p>
              </div>
            }
          </li>
        ))}
      </ul>
    </main>
  );
}

export default List;
