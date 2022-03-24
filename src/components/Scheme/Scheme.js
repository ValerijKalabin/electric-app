import ListOfActions from '../ListOfActions/ListOfActions';
import ListOfElements from '../ListOfElements/ListOfElements';
import './Scheme.css';

function Scheme({ elementList, onClickButton }) {
  return (
    <main className="scheme">
      <ul className="scheme__list">
        {elementList.map((element) => (
          <li className="scheme__item" key={element.id}>
            { element.listName === 'elements' && <ListOfElements onClickButton={onClickButton} /> }
            { element.listName === 'actions' && <ListOfActions elementName={element.name} onClickButton={onClickButton} /> }
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Scheme;
