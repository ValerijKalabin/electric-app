import { getElementButtonColor } from '../../utils/color';
import './Cable.css';

function Cable({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'cable',
      type: 'element',
      listName
    });
  }

  return (
    <button
      type="button"
      className={`cable ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className={getElementButtonColor(listName)} width="32" height="32" fill="transparent" stroke="red" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="16" r="2" strokeWidth="2" />
        <circle cx="26" cy="16" r="2" strokeWidth="2" />
        <line x1="8" x2="16" y1="14" y2="4" strokeWidth="1" />
        <line x1="16" x2="16" y1="4" y2="28" strokeWidth="1" />
        <line x1="16" x2="24" y1="28" y2="18" strokeWidth="1" />
      </svg>
    </button>
  );
}

export default Cable;
