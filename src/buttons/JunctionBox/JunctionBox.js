import { notElement } from '../../utils/element';
import './JunctionBox.css';

function JunctionBox({ element = notElement, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: element.id,
      name: 'junction-box',
      type: 'element',
      blockStatus: element.blockStatus,
      listName
    });
  }

  return (
    <button
      type="button"
      className={`box ${listName === 'elements' ? 'yellow' : 'gray'}`}
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <div className={`box__inner ${listName === 'elements' ? 'yellow' : 'gray'}`} />
    </button>
  );
}

export default JunctionBox;
