import { useNavigate } from 'react-router-dom';
import { getActionButtonColor } from '../../utils/color';
import './Help.css';

function Help({ listName, onClickButton }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/buttons");
    onClickButton({
      listName: listName,
      buttonName: 'help'
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
