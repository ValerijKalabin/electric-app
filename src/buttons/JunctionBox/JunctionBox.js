import { getElementButtonColor } from '../../utils/color';
import './JunctionBox.css';

function JunctionBox({ listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: `e-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
      name: 'junction-box',
      type: 'element',
      listName: 'actions'
    });
  }

  return (
    <button
      type="button"
      className={`box ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
    >
      <div className={`box__inner ${getElementButtonColor(listName)}`} />
    </button>
  );
}

export default JunctionBox;
