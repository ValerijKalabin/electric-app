import './Help.css';

function Help({ id="help", listName, onClickButton }) {
  function handleClick() {
    onClickButton({
      id,
      name: 'help',
      type: 'action',
      listName
    });
  }

  return (
    <button
      type="button"
      className="help"
      onClick={ handleClick }
    >
      ?
    </button>
  );
}

export default Help;
