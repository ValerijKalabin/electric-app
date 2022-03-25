import { getElementButtonColor } from '../../utils/color';
import './AutoSwitch.css';

function AutoSwitch({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'auto-switch',
      type: 'element',
      listName
    });
  }

  return (
    <button
      type="button"
      className={`auto-switch ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      A
    </button>
  );
}

export default AutoSwitch;
