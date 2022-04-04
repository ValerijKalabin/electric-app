import { notElement } from '../../utils/element';
import './AutoSwitch.css';

function AutoSwitch({ element = notElement, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: element.id,
      name: 'auto-switch',
      type: 'element',
      blockStatus: element.blockStatus,
      listName
    });
  }

  return (
    <button
      type="button"
      className={`auto-switch ${listName === 'elements' ? 'yellow' : 'gray'}`}
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      A
    </button>
  );
}

export default AutoSwitch;
