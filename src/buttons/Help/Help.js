import { getActionButtonColor } from '../../utils/color';
import './Help.css';

function Help({ id, listName, onClickButton }) {
  const elementListStyle = {
    lineHeight: '34px',
    border: '3px solid #bbb',
    borderRadius: '20px'
  };

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
      style={ listName === 'elements' ? elementListStyle : {} }
    >
      ?
    </button>
  );
}

export default Help;
