import { getActionButtonColor } from '../../utils/color';
import './Help.css';

function Help({ listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: `a-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
      name: 'help',
      type: 'action',
      listName: listName
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
