import { notElement } from '../../utils/element';
import './Socket.css';

function Socket({ element = notElement, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: element.id,
      name: 'socket',
      type: 'element',
      listName
    });
  }

  return (
    <button
      className={`
        socket
        ${listName === 'elements' ? 'socket_list_elements' : ''}
        ${listName === 'actions' ? 'socket_list_actions' : ''}
        ${listName === 'nolist' ? 'socket_list_nolist' : ''}
      `}
      type="button"
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className="socket__image" width="32" height="32" fill="transparent" stroke="red" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" x2="15" y1="17" y2="17" />
        <line x1="24" x2="32" y1="17" y2="17" />
        <line x1="16" x2="8" y1="18" y2="10" />
        <line x1="16" x2="8" y1="16" y2="24" />
        <line x1="16" x2="24" y1="10" y2="18" />
        <line x1="16" x2="24" y1="24" y2="16" />
      </svg>
    </button>
  );
}

export default Socket;
