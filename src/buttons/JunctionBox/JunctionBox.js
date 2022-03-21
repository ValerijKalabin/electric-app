import { useNavigate } from 'react-router-dom';
import { getElementButtonColor } from '../../utils/color';
import './JunctionBox.css';

function JunctionBox({ listName, onClickButton }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/element");
    onClickButton({
      listName: listName,
      buttonName: 'junction-box'
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