import { useNavigate } from 'react-router-dom';
import { getElementButtonColor } from '../../utils/color';
import './AutoSwitch.css';

function AutoSwitch({ listName }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <button
      type="button"
      className={`text ${getElementButtonColor(listName)}`}
      onClick={ handleClick }
    >
      A
    </button>
  );
}

export default AutoSwitch;
