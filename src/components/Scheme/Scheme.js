import ListActions from '../ListActions/ListActions';
import ListElements from '../ListElements/ListElements';
import './Scheme.css';

function Scheme({ elementName, onClickButton }) {
  return (
    <main className="scheme">
      { !elementName && <ListElements onClickButton={onClickButton} /> }
      { !!elementName && <ListActions elementName={elementName} onClickButton={onClickButton} /> }
    </main>
  );
}

export default Scheme;
