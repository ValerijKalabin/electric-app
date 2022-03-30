import { getElementButtonColor } from '../../utils/color';
import './Switch.css';

function Switch({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'switch',
      type: 'element',
      listName
    });
  }

  return (
    <button
      type="button"
      className="switch"
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className={getElementButtonColor(listName)} width="40" height="40" fill="transparent" stroke="red" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="17" />
        <line x1="2" x2="15" y1="20" y2="20" />
        <line x1="14" x2="25" y1="20" y2="13" />
        <line x1="25" x2="38" y1="20" y2="20" />
      </svg>
    </button>
  );
}

export default Switch;
