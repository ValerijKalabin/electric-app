import Add from '../../buttons/Add/Add';
import Change from '../../buttons/Change/Change';
import Help from '../../buttons/Help/Help';
import Search from '../../buttons/Search/Search';
import './ListOfNavigation.css';


function ListOfNavigation({ elementID, onClickButton }) {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Add id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="navigation__item">
        <Change id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="navigation__item">
        <Search id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="navigation__item">
        <Help id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListOfNavigation;
