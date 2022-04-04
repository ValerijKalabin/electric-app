import { notElement } from '../../utils/element';
import './AutoSwitch.css';

function AutoSwitch({ element = notElement, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: element.id,
      name: 'auto-switch',
      type: 'element',
      listName
    });
  }

  return (
    <div className={`
      auto-switch__container
      ${element.blockStatus === 'first' ? 'auto-switch__container_place_first' : ''}
      ${element.blockStatus === 'middle' ? 'auto-switch__container_place_middle' : ''}
      ${element.blockStatus === 'last' ? 'auto-switch__container_place_last' : ''}
    `}>
      <button
        className={`
          auto-switch
          ${listName === 'elements' ? 'auto-switch_list_elements' : ''}
          ${listName === 'actions' ? 'auto-switch_list_actions' : ''}
          ${listName === 'nolist' ? 'auto-switch_list_nolist' : ''}
        `}
        type="button"
        onClick={ handleClick }
        disabled={ listName === 'actions' }
      >
        A
      </button>
    </div>
  );
}

export default AutoSwitch;
