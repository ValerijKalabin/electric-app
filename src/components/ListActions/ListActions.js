import Add from '../../buttons/Add/Add';
import Change from '../../buttons/Change/Change';
import Delete from '../../buttons/Delete/Delete';
import Help from '../../buttons/Help/Help';
import Search from '../../buttons/Search/Search';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import './ListActions.css';

function ListActions({ onClickButton }) {
  return (
    <ul className="actions">
      <li className="actions__item actions__item_element">
        <AutoSwitch listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_add">
        <Add listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_change">
        <Change listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_delete">
        <Delete listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_help">
        <Help listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_search">
        <Search listName="actions" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListActions;
