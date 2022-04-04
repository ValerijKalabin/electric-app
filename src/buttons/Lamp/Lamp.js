import { notElement } from '../../utils/element';
import './Lamp.css';

function Lamp({ element = notElement, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: element.id,
      name: 'lamp',
      type: 'element',
      listName
    });
  }

  return (
    <button
      className={`
        lamp
        ${listName === 'elements' ? 'lamp_list_elements' : ''}
        ${listName === 'actions' ? 'lamp_list_actions' : ''}
        ${listName === 'nolist' ? 'lamp_list_nolist' : ''}
      `}
      type="button"
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <svg className="lamp__image" width="32" height="32" fill="transparent" stroke="red" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" x2="28" y1="4" y2="28" />
        <line x1="4" x2="28" y1="28" y2="4" />
      </svg>
    </button>
  );
}

export default Lamp;
