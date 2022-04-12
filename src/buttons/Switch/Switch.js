import { notElement } from '../../utils/element';
import './Switch.css';

function Switch({ element = notElement, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: element.id,
      name: 'switch',
      type: 'element',
      listName
    });
  }

  return (
    <button
      className={`
        switch
        ${listName === 'elements' ? 'switch_list_elements' : ''}
        ${listName === 'actions' ? 'switch_list_actions' : ''}
        ${listName === 'nolist' ? 'switch_list_nolist' : ''}
      `}
      type="button"
      onClick={ handleClick }
      disabled={listName === 'actions'}
    >
      <svg className="switch__image" width="32" height="32" fill="transparent" stroke="red" strokeWidth="2" xmlns="http://www.w3.org/1600/svg">
        <line x1="0" x2="12" y1="17" y2="17" />
        <line x1="11" x2="21" y1="17" y2="10" />
        <line x1="21" x2="32" y1="17" y2="17" />
      </svg>
    </button>
  );
}

export default Switch;
