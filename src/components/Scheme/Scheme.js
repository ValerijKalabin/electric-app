import ListElements from '../ListElements/ListElements';
import './Scheme.css';

function Scheme({ onClickButton }) {
  return (
    <main className="scheme">
      <ListElements onClickButton={onClickButton} />
    </main>
  );
}

export default Scheme;
