import { getElementButtonColor } from '../../utils/color';
import './JunctionBox.css';

function JunctionBox({ id, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'junction-box',
      type: 'element',
      listName
    });
  }

  return (
    <button
      type="button"
      className={`box ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <div className={`box__inner ${getElementButtonColor(listName)}`} />
    </button>
  );
}

export default JunctionBox;
