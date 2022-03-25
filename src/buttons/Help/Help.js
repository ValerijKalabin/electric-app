import { getActionButtonColor } from '../../utils/color';
import './Help.css';

function Help({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'help',
      type: 'action',
      listName
    });
  }

  return (
    <button
      type="button"
      className={`help ${getActionButtonColor(listName)}`}
      onClick={ handleClick }
    >
      ?
    </button>
  );
}

export default Help;
