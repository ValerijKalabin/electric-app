import { useNavigate } from 'react-router-dom';
import { getElementButtonColor } from '../../utils/color';
import './AutoSwitch.css';

function AutoSwitch({ listName, onClickButton }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/element");
    onClickButton({
      listName: listName,
      buttonName: 'auto-switch'
    });
  }

  return (
    <button
      type="button"
      className={`auto-switch ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
    >
      A
    </button>
  );
}

export default AutoSwitch;
