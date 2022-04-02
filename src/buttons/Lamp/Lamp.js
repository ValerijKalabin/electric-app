import { getElementButtonColor } from '../../utils/color';
import './Lamp.css';

function Lamp({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'lamp',
      type: 'element',
      listName
    });
  }

  return (
    <button
      type="button"
      className={`lamp ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className={getElementButtonColor(listName)} width="32" height="32" fill="transparent" stroke="red" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" x2="28" y1="4" y2="28" />
        <line x1="4" x2="28" y1="28" y2="4" />
      </svg>
    </button>
  );
}

export default Lamp;
