import Add from '../../buttons/Add/Add';
import Delete from '../../buttons/Delete/Delete';
import Search from '../../buttons/Search/Search';
import './List.css';

function List() {
  return (
    <main className="list">
      <Add/>
      <Delete />
      <Search />
    </main>
  );
}

export default List;
