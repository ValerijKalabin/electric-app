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
      className={`switch ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className="switch__image" width="32" height="32" fill="transparent" stroke="red" strokeWidth="2" xmlns="http://www.w3.org/1600/svg">
        <line x1="0" x2="12" y1="16" y2="16" />
        <line x1="11" x2="21" y1="16" y2="9" />
        <line x1="21" x2="32" y1="16" y2="16" />
      </svg>
    </button>
  );
}

export default Switch;
