import { Link } from 'react-router-dom';
import { getActionButtonColor } from '../../utils/color';
import './Help.css';

function Help({ listName, onClickHelp }) {
  function handleClick() {
    onClickHelp(listName);
  }

  return (
    <Link
      to="/buttons"
      className={`help ${getActionButtonColor(listName)}`}
      onClick={ handleClick }
    >
      ?
    </Link>
  );
}

export default Help;
