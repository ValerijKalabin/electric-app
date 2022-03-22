import { Link } from 'react-router-dom';
import * as element from '../../utils/element';
import './ElementSetting.css';

function ElementSetting({ elementName }) {
  return (
    <main className="element">
      <h1 className="element__title">{element.getElementTitle(elementName)}</h1>
      <form className="element__form">
        { element.isInputNameVisible(elementName) &&
          <div className="element__container">
            <label className="element__label" htmlFor="name">Наименование</label>
            <input className="element__input" type="text" id="name" />
            <span className="element__explanation">{ element.getInputNameExplanation(elementName) }</span>
          </div>
        }
        { element.isInputNumberVisible(elementName) &&
          <div className="element__container">
            <label className="element__label" htmlFor="number">Количество</label>
            <input className="element__input" type="number" id="number" />
            <span className="element__explanation">{ element.getInputNumberExplanation(elementName) }</span>
          </div>
        }
        { element.isInputPowerVisible(elementName) &&
          <div className="element__container">
            <label className="element__label" htmlFor="power">{ element.getLabelPower(elementName) }</label>
            <input className="element__input" type="number" id="power" />
            <span className="element__explanation">{ element.getInputPowerExplanation(elementName) }</span>
          </div>
        }
        <div className="element__buttons">
          { element.isButtonSubmitVisible(elementName) &&
            <button className="element__submit" type="submit">Ok</button>
          }
          <Link to="/scheme" className="element__return">Закрыть</Link>
        </div>
      </form>
    </main>
  );
}

export default ElementSetting;
