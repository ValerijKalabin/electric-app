import { useNavigate } from 'react-router-dom';
import { getElementButtonColor } from '../../utils/color';
import './Switch.css';

function Switch({ listName, onClickButton }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/element");
    onClickButton({
      listName: listName,
      buttonName: 'switch',
      buttonType: 'element',
      buttonID: 'e-' + (new Date().getTime()) + '-r-' + Math.floor(Math.random() * 1000000)
    });
  }

  return (
    <button
      type="button"
      className="switch"
      onClick={ handleClick }
    >
      <svg className={getElementButtonColor(listName)} width="60" height="60" fill="transparent" stroke="red" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="26" />
        <line x1="2" x2="21" y1="30" y2="30" />
        <line x1="20" x2="40" y1="30" y2="20" />
        <line x1="40" x2="58" y1="30" y2="30" />
      </svg>
    </button>
  );
}

export default Switch;
