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
  );
}

export default AutoSwitch;
