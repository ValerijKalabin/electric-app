import { getElementButtonColor } from '../../utils/color';
import './AutoSwitch.css';

function AutoSwitch({ listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: `e-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
      name: 'auto-switch',
      type: 'element',
      listName: 'actions'
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
