import { Link } from 'react-router-dom';
import AutoSwitch from '../../icons/AutoSwitch/AutoSwitch';
import Help from '../../icons/Help/Help';
import JunctionBox from '../../icons/JunctionBox/JunctionBox';
import Lamp from '../../icons/Lamp/Lamp';
import Socket from '../../icons/Socket/Socket';
import Switch from '../../icons/Switch/Switch';
import './ButtonsAssignment.css';

function ButtonsAssignment({ type }) {
  return (
    <main className="assignment">
      <h1 className="assignment__title">
        Назначение кнопок
      </h1>
      <ul className="assignment__list">
        { type === "element" &&
          <li className="assignment__item">
            <div className="assignment__icon">
              <AutoSwitch color="yellow" />
            </div>
            <div className="assignment__label">
              <p className="assignment__text">
                Добавить в схему автоматический выключатель
              </p>
            </div>
          </li>
        }
        { type === "element" &&
          <li className="assignment__item">
            <div className="assignment__icon">
              <JunctionBox color="yellow" />
            </div>
            <div className="assignment__label">
              <p className="assignment__text">
                Добавить в схему распаечную коробку
              </p>
            </div>
          </li>
        }
        { type === "element" &&
          <li className="assignment__item">
            <div className="assignment__icon">
              <Lamp color="yellow" />
            </div>
            <div className="assignment__label">
              <p className="assignment__text">
                Добавить в схему светильник
              </p>
            </div>
          </li>
        }
        { type === "element" &&
          <li className="assignment__item">
            <div className="assignment__icon">
              <Socket color="yellow" />
            </div>
            <div className="assignment__label">
              <p className="assignment__text">
                Добавить в схему розетку
              </p>
            </div>
          </li>
        }
        { type === "element" &&
          <li className="assignment__item">
            <div className="assignment__icon">
              <Switch color="yellow" />
            </div>
            <div className="assignment__label">
              <p className="assignment__text">
                Добавить в схему выключатель
              </p>
            </div>
          </li>
        }
        { type === "action" &&
          <li className="assignment__item">
            <div className="assignment__icon">
              <Help color="yellow" />
            </div>
            <div className="assignment__label">
              <p className="assignment__text">
                Посмотреть назначение кнопок
              </p>
            </div>
          </li>
        }
      </ul>
      <Link to="/scheme" className="assignment__return">Закрыть</Link>
    </main>
  );
}

export default ButtonsAssignment;
