import { Link } from 'react-router-dom';
import { getActionButtonColor } from '../../utils/color';
import './Help.css';

function Help({ type, onClickHelp }) {
  function handleClick() {
    onClickHelp(type);
  }

  return (
    <Link
      to="/buttons-assignment"
      className={`help ${getActionButtonColor(type)}`}
      onClick={handleClick}
    >
      ?
    </Link>
  );
}

export default Help;
