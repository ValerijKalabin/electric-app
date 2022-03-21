import Elements from '../Elements/Elements';
import './Scheme.css';

function Scheme({ onClickHelp }) {
  return (
    <main className="scheme">
      <Elements onClickHelp={onClickHelp} />
    </main>
  );
}

export default Scheme;
