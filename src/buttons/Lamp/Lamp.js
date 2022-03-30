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
      <svg className={getElementButtonColor(listName)} width="40" height="40" fill="transparent" stroke="red" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="17" />
        <line x1="7" x2="33" y1="33" y2="7" />
        <line x1="7" x2="33" y1="7" y2="33" />
      </svg>
    </button>
  );
}

export default Lamp;
