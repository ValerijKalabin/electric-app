import ListOfActions from '../ListOfActions/ListOfActions';
import ListOfElements from '../ListOfElements/ListOfElements';
import './Scheme.css';

function Scheme({ elementName, onClickButton }) {
  return (
    <main className="scheme">
      { !elementName && <ListOfElements onClickButton={onClickButton} /> }
      { !!elementName && <ListOfActions elementName={elementName} onClickButton={onClickButton} /> }
    </main>
  );
}

export default Scheme;
