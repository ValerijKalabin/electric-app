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
      className="lamp"
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className={getElementButtonColor(listName)} width="60" height="60" fill="transparent" stroke="red" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="26" />
        <line x1="11" x2="49" y1="49" y2="11" />
        <line x1="11" x2="49" y1="11" y2="49" />
      </svg>
    </button>
  );
}

export default Lamp;
