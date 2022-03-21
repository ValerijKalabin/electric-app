import { Link } from 'react-router-dom';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Help from '../../buttons/Help/Help';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListButtons.css';

function ListButtons({ listState }) {
  return (
    <main className="buttons">
      <h1 className="buttons__title">
        Назначение кнопок
      </h1>
      <ul className="buttons__list">
        { listState === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <AutoSwitch color="yellow" />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему автоматический выключатель
              </p>
            </div>
          </li>
        }
        { listState === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <JunctionBox color="yellow" />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему распаечную коробку
              </p>
            </div>
          </li>
        }
        { listState === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Lamp color="yellow" />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему светильник
              </p>
            </div>
          </li>
        }
        { listState === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Socket color="yellow" />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему розетку
              </p>
            </div>
          </li>
        }
        { listState === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Switch color="yellow" />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему выключатель
              </p>
            </div>
          </li>
        }
        { listState === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Help color="yellow" />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Посмотреть назначение кнопок
              </p>
            </div>
          </li>
        }
      </ul>
      <Link to="/scheme" className="buttons__return">Закрыть</Link>
    </main>
  );
}

export default ListButtons;
