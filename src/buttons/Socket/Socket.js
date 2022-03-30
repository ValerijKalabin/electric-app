import { getElementButtonColor } from '../../utils/color';
import './Socket.css';

function Socket({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'socket',
      type: 'element',
      listName
    });
  }

  return (
    <button
      type="button"
      className="socket"
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className={getElementButtonColor(listName)} width="40" height="40" fill="transparent" stroke="red" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="17" />
        <line x1="2" x2="19" y1="20" y2="20" />
        <line x1="29" x2="38" y1="20" y2="20" />
        <line x1="19" x2="12" y1="21" y2="14" />
        <line x1="19" x2="12" y1="19" y2="26" />
        <line x1="22" x2="29" y1="14" y2="21" />
        <line x1="22" x2="29" y1="26" y2="19" />
      </svg>
    </button>
  );
}

export default Socket;
