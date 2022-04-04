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
    <div className={`
      switch__container
      ${element.blockStatus === 'first' ? 'switch__container_place_first' : ''}
      ${element.blockStatus === 'middle' ? 'switch__container_place_middle' : ''}
      ${element.blockStatus === 'last' ? 'switch__container_place_last' : ''}
    `}>
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
          <line x1="0" x2="12" y1="16" y2="16" />
          <line x1="11" x2="21" y1="16" y2="9" />
          <line x1="21" x2="32" y1="16" y2="16" />
        </svg>
      </button>
    </div>

  );
}

export default Switch;
