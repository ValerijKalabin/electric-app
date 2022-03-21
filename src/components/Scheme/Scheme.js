import ListElements from '../ListElements/ListElements';
import './Scheme.css';

function Scheme({ onClickHelp }) {
  return (
    <main className="scheme">
      <ListElements onClickHelp={onClickHelp} />
    </main>
  );
}

export default Scheme;
