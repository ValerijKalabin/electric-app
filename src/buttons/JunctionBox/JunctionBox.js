import { notElement } from '../../utils/element';
import './JunctionBox.css';

function JunctionBox({ element = notElement, listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id: element.id,
      name: 'junction-box',
      type: 'element',
      listName
    });
  }

  return (
    <button
      className={`
        box
        ${listName === 'elements' ? 'box_list_elements' : ''}
        ${listName === 'actions' ? 'box_list_actions' : ''}
        ${listName === 'nolist' ? 'box_list_nolist' : ''}
      `}
      type="button"
      onClick={ handleClick }
      disabled={ listName === 'actions' }
    >
      <div className="box__inner" />
    </button>
  );
}

export default JunctionBox;
