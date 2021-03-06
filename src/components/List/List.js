import { useEffect, useState } from 'react';
import { outerHeight } from '../../utils/position';
import './List.css';

function List({ pageHeight, currentDrawing, elementList }) {
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
    const allMaterials = [
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
    ];
    const currentMaterials = allMaterials.filter((item) => item.number > 0);
    setMaterials(currentMaterials);
  }, [ elementList ]);

  return (
    <main className="materials" style={{ minHeight: `${pageHeight - outerHeight}px` }}>
      <div className={`
        materials__page
        ${!currentDrawing.name ? 'materials__page_nodrawing' : ''}
        ${!elementList.length ? 'materials__page_nolist' : ''}
      `}>
        <h1 className={`materials__title ${!currentDrawing.name ? 'materials__title_nodrawing' : ''}`}>
          { !elementList.length ? 'Здесь будет список материалов' : 'Материалы' }
        </h1>
        {!!currentDrawing.name &&
          <p className="materials__subtitle">
            {currentDrawing.name}
          </p>
        }
        <ul className="materials__list">
          { materials.map((item, index) => (
            <li className="materials__item" key={`m${index}`}>
              <div className="materials__label">
                <p className="materials__name">{item.material}</p>
              </div>
              <p className="materials__number">{item.number}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default List;
